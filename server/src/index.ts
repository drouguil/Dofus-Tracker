import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import * as WebSocket from 'ws';
import { PacketAnalyzer } from './helpers/PacketAnalyzer';
import { MessageSocket } from './models/messages/MessageSocket';
import bodyParser = require('body-parser');
import { BufferHelper } from './helpers/BufferHelper';

const app = express();

//app.user(bodyParser.json());
// after the code that uses bodyParser and other cool stuff
var originsWhitelist = [
  'http://localhost:4200'
];

var corsOptions = {
  origin: function (origin, callback) {
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
}
//here is the magic
app.use(cors(corsOptions));

app.use(bodyParser.json());       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

const Cap = require('../lib/Cap').Cap;
const decoders = require('../lib/Cap').decoders;

let isStreaming: boolean = false;
let deviceIndex: number = 0;
let servers: any[] = new Array();

interface ExtWebSocket extends WebSocket {
  isAlive: boolean;
}

wss.on('connection', (ws: WebSocket) => {

  const extWs = ws as ExtWebSocket;

  extWs.isAlive = true;
  let PROTOCOL = decoders.PROTOCOL;

  let c = new Cap();
  let device = Cap.deviceList()[deviceIndex].name;
  let filter = 'tcp and (';

  for (let index = 0; index < servers.length; index++) {
    let ip = servers[index].ip;
    filter += "dst " + ip + " or src " + ip;
    if (index < servers.length - 1) {
      filter += " or ";
    }
  }

  filter += ")";

  let bufSize = 10 * 1024 * 1024;
  let buffer = Buffer.alloc(65535);

  let linkType = c.open(device, filter, bufSize, buffer);

  c.setMinBytes && c.setMinBytes(0);

  let goodSeqno: number;
  let badAckno: number;

  const packetsSaved: any[] = new Array();

  c.on('packet', function (nbytes, trunc) {

    if (linkType === 'ETHERNET') {

      let ret = decoders.Ethernet(buffer);

      if (ret.info.type === PROTOCOL.ETHERNET.IPV4) {

        ret = decoders.IPV4(buffer, ret.offset);
        let dataLen = ret.info.totallen - ret.hdrlen;
        ret = decoders.TCP(buffer, ret.offset);
        dataLen -= ret.hdrlen;

        let data: Buffer = buffer.slice(ret.offset, ret.offset + dataLen);

        if (dataLen > 0) {
          if (ret.info.srcport == 5555) {
            console.log('Serveur', ret.info.seqno, 'length :', dataLen);
            analyzeSeqno(ret, data, trunc, dataLen);
          } else {
            console.log('Client ', ret.info.ackno, 'length :', dataLen);
            if(badAckno && badAckno === ret.info.ackno) {
              console.log('Duplicate');
            } else {
              badAckno = ret.info.ackno;
              PacketAnalyzer.analyze(ws, ret, data, trunc);
            }
          }
        }
      } else console.log('Unsupported Ethertype: ' + PROTOCOL.ETHERNET[ret.info.type]);
    }
  });

  function analyzeSeqno(ret: any, data: any, trunc: any, dataLen: any) {
    if (goodSeqno && ret.info.seqno !== goodSeqno) {

      if (ret.info.seqno > goodSeqno) {
        console.log('Out Of Order');

        let goodPacket: any;

        for (let index = 0; !goodPacket && index < packetsSaved.length; index++) {

          const packetSaved = packetsSaved[index];

          if (packetSaved.ret.info.seqno === goodSeqno) {
            console.log('Found !');
            goodPacket = packetSaved;
            packetsSaved.splice(index, 1);
          }
        }

        if (goodPacket) {
          goodSeqno = goodPacket.ret.info.seqno + goodPacket.dataLen;
          analyzeSeqno(ret, data, trunc, dataLen);
        }
        else {
          const packetToSave = {
            ret: ret,
            data: data,
            trunc: trunc
          }

          packetsSaved.push(packetToSave);
        }
      }
      else {
        console.log('Duplicate');
      }
    }
    else {
      goodSeqno = ret.info.seqno + dataLen;
      PacketAnalyzer.analyze(ws, ret, data, trunc);
    }
  }

  ws.on('pong', () => {
    extWs.isAlive = true;
  });

  //connection is up, let's add a simple simple event
  ws.on('message', (message: string) => {

    let messageSocket = new MessageSocket('O');

    setTimeout(() => {
      ws.send(JSON.stringify(messageSocket));
    }, 1000);

  });

  ws.on('error', (err) => {
    console.warn(`Client disconnected - reason: ${err}`);
  })
});

setInterval(() => {
  wss.clients.forEach((ws: WebSocket) => {

    const extWs = ws as ExtWebSocket;

    if (!extWs.isAlive) return ws.terminate();

    extWs.isAlive = false;
    ws.ping(null, undefined);
  });
}, 10000);

app.get('/devices', function (req, res) {
  res.send(Cap.deviceList());
});

app.post('/config', function (req, res) {
  isStreaming = req.body.isStreaming;
  deviceIndex = req.body.deviceIndex;
  servers = req.body.servers;
  res.send({});
});

//start our server
server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port 8999 :)`);
});