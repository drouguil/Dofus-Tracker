import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ChatComponent } from './chat/chat.component';
import { OverlayComponent } from './overlay/overlay.component';
import { TimelineComponent } from './map/timeline/timeline.component';
import { DetailsComponent } from './details/details.component';
import { PacketMessage } from '../controllers/PacketMessage';
import { SpellImgComponent } from './common/spell-img/spell-img.component';
import { ConfigComponent } from './config/config.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { TimelineEntityComponent } from './map/timeline/timeline-entity/timeline-entity.component';
import { CellEmptyComponent } from './map/cell/cell-empty/cell-empty.component';
import { CellObstacleComponent } from './map/cell/cell-obstacle/cell-obstacle.component';
import { CellAvailableComponent } from './map/cell/cell-available/cell-available.component';
import { CellComponent } from './map/cell/cell.component';
import { OverlayEntityComponent } from './overlay/overlay-team/overlay-entity/overlay-entity.component';
import { OverlayTeamComponent } from './overlay/overlay-team/overlay-team.component';
import { EntityProfilComponent } from './common/entity-profil/entity-profil.component';
import { EntityDofusComponent } from './common/entity-dofus/entity-dofus.component';
import { EntityLegendariesComponent } from './common/entity-legendaries/entity-legendaries.component';
import { EntityStatComponent } from './common/entity-stat/entity-stat.component';
import { DetailsEntityComponent } from './details/details-entity/details-entity.component';
import { BoostBuffComponent } from './common/boost-buff/boost-buff.component';
import { SpellBoostBuffComponent } from './common/spell-boost-buff/spell-boost-buff.component';
import { StateBoostBuffComponent } from './common/state-boost-buff/state-boost-buff.component';
import { TriggeredBuffComponent } from './common/triggered-buff/triggered-buff.component';
import { DetailsBuffsComponent } from './details/details-buffs/details-buffs.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';
import { ChatBoostBuffMessageComponent } from './chat/chat-message/chat-boost-buff-message/chat-boost-buff-message.component';
import { ChatBuffMessageComponent } from './chat/chat-message/chat-buff-message/chat-buff-message.component';
import { ChatCastSpellMessageComponent } from './chat/chat-message/chat-cast-spell-message/chat-cast-spell-message.component';
import { ChatHealMessageComponent } from './chat/chat-message/chat-heal-message/chat-heal-message.component';
import { ChatHitMessageComponent } from './chat/chat-message/chat-hit-message/chat-hit-message.component';
import { ChatMoveMessageComponent } from './chat/chat-message/chat-move-message/chat-move-message.component';
import { ChatSlideMessageComponent } from './chat/chat-message/chat-slide-message/chat-slide-message.component';
// tslint:disable-next-line:max-line-length
import { ChatSpellBoostBuffMessageComponent } from './chat/chat-message/chat-spell-boost-buff-message/chat-spell-boost-buff-message.component';
// tslint:disable-next-line:max-line-length
import { ChatStateBoostBuffMessageComponent } from './chat/chat-message/chat-state-boost-buff-message/chat-state-boost-buff-message.component';
import { ChatTriggeredBuffMessageComponent } from './chat/chat-message/chat-triggered-buff-message/chat-triggered-buff-message.component';
import { ChatTeleportMessageComponent } from './chat/chat-message/chat-teleport-message/chat-teleport-message.component';
import { ChatWeaponMessageComponent } from './chat/chat-message/chat-weapon-message/chat-weapon-message.component';
import { ChatPaginationComponent } from './chat/chat-pagination/chat-pagination.component';
import { ChatEntityComponent } from './chat/chat-entity/chat-entity.component';
import { WeaponImgComponent } from './common/weapon-img/weapon-img.component';
import { StateImgComponent } from './common/state-img/state-img.component';
import { EntityStatesComponent } from './common/entity-states/entity-states.component';
import { ChatTackleMessageComponent } from './chat/chat-message/chat-tackle-message/chat-tackle-message.component';
import { DetailsBreedSpellsComponent } from './details/details-spells/details-breed-spells/details-breed-spells.component';
import { DetailsCommonSpellsComponent } from './details/details-spells/details-common-spells/details-common-spells.component';
import { DetailsSpellsComponent } from './details/details-spells/details-spells.component';
import { BreedSpellComponent } from './common/breed-spell/breed-spell.component';
import { ChatDodgeMessageComponent } from './chat/chat-message/chat-dodge-message/chat-dodge-message.component';
// tslint:disable-next-line:max-line-length
import { ChatSendSpellEffectComponent } from './chat/chat-message/chat-triggered-buff-message/chat-send-spell-effect/chat-send-spell-effect.component';
import { ChatHitEffectComponent } from './chat/chat-message/chat-triggered-buff-message/chat-hit-effect/chat-hit-effect.component';
// tslint:disable-next-line:max-line-length
import { ChatSetStateEffectComponent } from './chat/chat-message/chat-triggered-buff-message/chat-set-state-effect/chat-set-state-effect.component';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        ChatComponent,
        OverlayComponent,
        TimelineComponent,
        DetailsComponent,
        SpellImgComponent,
        ConfigComponent,
        MenuComponent,
        LoginComponent,
        TimelineEntityComponent,
        CellEmptyComponent,
        CellObstacleComponent,
        CellAvailableComponent,
        CellComponent,
        OverlayEntityComponent,
        OverlayTeamComponent,
        EntityProfilComponent,
        EntityDofusComponent,
        EntityLegendariesComponent,
        EntityStatComponent,
        DetailsEntityComponent,
        BoostBuffComponent,
        SpellBoostBuffComponent,
        StateBoostBuffComponent,
        TriggeredBuffComponent,
        DetailsBuffsComponent,
        ChatMessageComponent,
        ChatBoostBuffMessageComponent,
        ChatBuffMessageComponent,
        ChatCastSpellMessageComponent,
        ChatHealMessageComponent,
        ChatHitMessageComponent,
        ChatMoveMessageComponent,
        ChatSlideMessageComponent,
        ChatSpellBoostBuffMessageComponent,
        ChatStateBoostBuffMessageComponent,
        ChatTriggeredBuffMessageComponent,
        ChatTeleportMessageComponent,
        ChatWeaponMessageComponent,
        ChatPaginationComponent,
        ChatEntityComponent,
        WeaponImgComponent,
        StateImgComponent,
        EntityStatesComponent,
        ChatTackleMessageComponent,
        DetailsBreedSpellsComponent,
        DetailsCommonSpellsComponent,
        DetailsSpellsComponent,
        BreedSpellComponent,
        ChatDodgeMessageComponent,
        ChatSendSpellEffectComponent,
        ChatHitEffectComponent,
        ChatSetStateEffectComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDialogModule,
        MatTooltipModule,
        HttpClientModule
    ],
    providers: [
        PacketMessage
    ],
    entryComponents: [
        DetailsComponent,
        ConfigComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
