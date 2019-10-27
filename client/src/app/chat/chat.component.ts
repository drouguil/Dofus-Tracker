import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../../models/chat/ChatMessage';
import { Entity } from '../../models/fight/entity/Entity';
import { ChatService } from '../services/chat.service';
import { TeamFightEnum } from '../../../../enums/TeamFightEnum';
import { DetailsService } from '../services/details.service';
import { BreedEntity } from '../../models/fight/entity/BreedEntity';
import { MonsterEntity } from '../../models/fight/entity/MonsterEntity';
import { ChatMoveMessage } from '../../models/chat/ChatMoveMessage';
import { MapService } from '../services/map.service';
import { ChatCastSpellMessage } from '../../models/chat/ChatCastSpellMessage';
import { ChatHitMessage } from '../../models/chat/ChatHitMessage';
import { ActionEnum } from '../../../../enums/ActionEnum';
import { ElementEnum } from '../../../../enums/ElementEnum';
import { Spell } from '../../models/fight/Spell';
import { ChatTeleportMessage } from '../../models/chat/ChatTeleportMessage';
import { ChatSlideMessage } from '../../models/chat/ChatSlideMessage';
import { ChatWeaponMessage } from '../../models/chat/ChatWeaponMessage';
import { Weapon } from '../../models/fight/Weapon';
import { ChatHealMessage } from '../../models/chat/ChatHealMessage';
import { ChatBuffMessage } from '../../models/chat/ChatBuffMessage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  public chat: ChatMessage[][];
  public pages: number[];

  constructor(
    private chatService: ChatService,
    private detailsService: DetailsService
  ) {
    this.chat = this.chatService.chat;
    this.pages = Array(10).fill(0);
  }

  public isWeaponMessage(message: ChatMessage): boolean {
    return message instanceof ChatWeaponMessage;
  }

  public isTeleportMessage(message: ChatMessage): boolean {
    return message instanceof ChatTeleportMessage;
  }

  public isSlideMessage(message: ChatMessage): boolean {
    return message instanceof ChatSlideMessage;
  }

  public isCastSpellMessage(message: ChatMessage): boolean {
    return message instanceof ChatCastSpellMessage;
  }

  public isHitMessage(message: ChatMessage): boolean {
    return message instanceof ChatHitMessage;
  }

  public isHealMessage(message: ChatMessage): boolean {
    return message instanceof ChatHealMessage;
  }

  public isBuffMessage(message: ChatMessage): boolean {
    return message instanceof ChatBuffMessage;
  }

  public checkEntityTeam(entity: Entity, team: TeamFightEnum): boolean {
    return entity.team === team;
  }

  public getSpanClassName(text: string) {
    let className = '';
    if (text.length >= 12) {
      className = 'length-' + Math.floor((text.length - 10) / 4);
    }
    return className;
  }

  public getHitImage(message: ChatHitMessage): string {
    let src = '../../assets/img/chat/';
    let isFound = true;
    switch (message.action) {
      case ActionEnum.CHARACTER_HIT_NEUTRAL:
      case ActionEnum.CHARACTER_HIT_EARTH:
      case ActionEnum.CHARACTER_HIT_FIRE:
      case ActionEnum.CHARACTER_HIT_WATER:
      case ActionEnum.CHARACTER_HIT_AIR:
      case ActionEnum.CHARACTER_HIT_PUSHBACK:
        src += 'hit';
        break;
      case ActionEnum.CHARACTER_STEAL_NEUTRAL:
      case ActionEnum.CHARACTER_STEAL_EARTH:
      case ActionEnum.CHARACTER_STEAL_FIRE:
      case ActionEnum.CHARACTER_STEAL_WATER:
      case ActionEnum.CHARACTER_STEAL_AIR:
        src += 'steal';
        break;
      default:
        src += 'cross';
        isFound = false;
        break;
    }
    if (isFound) {
      src += '_' + this.getHitClassName(message);
    }
    src += '.png';
    return src;
  }

  public getHitClassName(message: ChatHitMessage): string {
    const element: string = ElementEnum[message.element];
    if (element) {
      return element.toLowerCase();
    } else {
      return element;
    }
  }

  public getSpellImage(message: ChatCastSpellMessage): string {
    let src = '../../assets/img/spells/unknow.png';
    if (!message.isUnknow && message.spell instanceof Spell) {
      src = '../../assets/img/spells/' + message.spell.id + '.png';
    }
    return src;
  }

  public notFoundSpellImage(message: ChatCastSpellMessage) {
    message.isUnknow = true;
  }

  public getWeaponImage(message: ChatWeaponMessage): string {
    let src = '../../assets/img/weapons/unknow.png';
    if (!message.isUnknow && message.weapon instanceof Weapon) {
      src = '../../assets/img/weapons/' + message.weapon.image + '.png';
    }
    return src;
  }

  public notFoundWeaponImage(message: ChatWeaponMessage) {
    message.isUnknow = true;
  }

  public displaySpellCell(cellId: number): void {
    const cellsId: number[] = new Array();
    cellsId.push(cellId);
    MapService.instance.spellCells = cellsId;
  }

  public clearSpellCells(): void {
    MapService.instance.clearSpellCells();
  }

  public onHover(entity: Entity): void {
    entity.isHover = true;
  }

  public onLeave(entity: Entity): void {
    entity.isHover = false;
  }

  public getCurrentChatPage(): ChatMessage[] {
    return this.chat[this.chatService.currentPage];
  }

  public changeChatPage(page: number): void {
    this.chatService.currentPage = page;
  }

  public openDetails(entity: Entity): void {
    this.detailsService.openDialog(entity);
  }
}
