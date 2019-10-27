import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Device } from '../../models/config/Device';
import { Server } from '../../models/config/Server';
import { HttpService } from '../services/http.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLoading = true;
  public serverIsRunning = true;

  public devices: FormControl = new FormControl();
  public deviceList: Device[] = new Array();

  public servers: FormControl = new FormControl();
  public serverList: Server[] = new Array();

  public isAllServers = new FormControl();

  public isStreaming = new FormControl();

  constructor(private httpService: HttpService, private loginService: LoginService) { }

  ngOnInit() {

    const isStreaming: any = localStorage.getItem('isStreaming');

    if (isStreaming) {
      this.isStreaming.setValue(JSON.parse(isStreaming));
    } else {
      this.isStreaming.setValue(false);
    }

    this.httpService.getServers().subscribe(
      (servers: Server[]) => {
        this.serverList = servers;

        if (localStorage.getItem('servers')) {

          const serversArray: Server[] = new Array();

          const serversString: any = localStorage.getItem('servers');

          JSON.parse(serversString).forEach((serverString: string) => {

            const server: Server = JSON.parse(serverString);

            const serverToAdd: any = this.serverList.find(function (element: Server) {
              return element.id === server.id;
            });
            serversArray.push(serverToAdd);
          });

          if (serversArray.length > 0) {
            this.servers.setValue(serversArray);
          }

          if (this.serverList.length === this.servers.value.length) {
            this.isAllServers.setValue(true);
          }
        }

        if (this.deviceList.length > 0) {
          this.isLoading = false;
        }
      },
      (error) => {
        this.serverIsRunning = false;
        this.isLoading = false;
        console.error(error);
      }
    );

    this.httpService.getDevices().subscribe(
      (devices: Device[]) => {
        this.deviceList = devices;

        if (localStorage.getItem('devices')) {
          const devicesValue: any = localStorage.getItem('devices');
          this.devices.setValue(JSON.parse(devicesValue));
        }

        if (this.serverList.length > 0) {
          this.isLoading = false;
        }
      },
      (error) => {
        this.serverIsRunning = false;
        this.isLoading = false;
        console.error(error);
      }
    );
  }

  public isReady(): boolean {
    return this.devices.value > -1 && this.servers.value && (this.servers.value.length > 0 || this.isAllServers.value);
  }

  public connect(): void {

    if (this.isReady()) {

      localStorage.setItem('isStreaming', this.isStreaming.value);

      const servers: string[] = new Array();

      this.servers.value.forEach((server: Server) => {
        servers.push(JSON.stringify(server));
      });

      localStorage.setItem('servers', JSON.stringify(servers));

      localStorage.setItem('devices', this.devices.value);

      const params = {
        isStreaming: this.isStreaming.value,
        deviceIndex: this.devices.value,
        servers: this.servers.value
      };

      this.httpService.config(params).subscribe(
        (response: any) => {
          this.loginService.connect();
        },
        (error) => {
          this.serverIsRunning = false;
          console.error(error);
        }
      );
    }
  }

  public selectAllServers(): void {
    if (!this.isAllServers.value) {
      this.servers.setValue(this.serverList);
    } else {
      this.servers.setValue(new Array());
    }
  }

}
