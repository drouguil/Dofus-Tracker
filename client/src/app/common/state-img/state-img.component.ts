import { Component, OnInit, Input } from '@angular/core';
import { SpellStateEnum } from '../../../../../enums/SpellStateEnum';

@Component({
  selector: 'app-state-img',
  templateUrl: './state-img.component.html',
  styleUrls: ['./state-img.component.scss']
})
export class StateImgComponent implements OnInit {

  @Input() state: SpellStateEnum;

  public stateImage: string;
  public stateName: string;

  constructor() { }

  ngOnInit(): void {
    this.stateImage = '../../assets/img/states/' + this.state + '.png';
    if (SpellStateEnum[this.state]) {
      this.stateName = SpellStateEnum[this.state].toString().toLowerCase();
    } else {
      this.stateName = this.state.toString();
    }
  }

  public notFoundStateImage(): void {
    this.stateImage = '../../assets/img/states/unknow.png';
  }

}
