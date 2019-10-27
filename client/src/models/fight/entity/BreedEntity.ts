import { BreedEnum } from '../../../../../enums/BreedEnum';
import { Entity } from './Entity';
import { DirectionEnum } from '../../../../../enums/DirectionEnum';
import { DofusEnum } from '../../../../../enums/DofusEnum';
import { LegendaryEnum } from '../../../../../enums/LegendaryEnum';
import { Stats } from '../Stats';
import { Weapon } from '../Weapon';
import { BreedSpells } from '../BreedSpells';
import { BreedSpell } from '../BreedSpell';
import { BreedSpellEnum } from '../../../../../enums/BreedSpellEnum';

export class BreedEntity extends Entity {

    public dofus: DofusEnum[];
    public legendaries: LegendaryEnum[];
    public weapon: Weapon;
    public breedSpells: BreedSpells[];
    public commonSpells: BreedSpell[];

    constructor(
        public breed: BreedEnum,
        public sex: number,
        level: number,
        stats: Stats,
        id: number,
        direction: DirectionEnum,
        cellId: number
    ) {
        super(id, direction, cellId);
        this.level = level;
        this.stats = stats;
        this.dofus = new Array();
        this.legendaries = new Array();
        this.breedSpells = new Array();
        this.commonSpells = new Array();
        this.setCell(cellId);
    }

    public addDofus(dofus: DofusEnum): void {
        if (this.dofus.indexOf(dofus) === -1) {
            this.dofus.push(dofus);
        }
    }

    public addLegendary(legendary: LegendaryEnum): void {
        this.legendaries.push(legendary);
    }

    public analyzeSpell(spellId: number): void {
        let isDofus = true;
        switch (spellId) {
            case 5453:
                this.addDofus(DofusEnum.VEILLEURS);
                break;
            case 5454:
                this.addDofus(DofusEnum.NEBULEUX);
                break;
            case 5952:
                this.addDofus(DofusEnum.TURQUOISE);
                break;
            case 6149:
                this.addDofus(DofusEnum.DOKOKO);
                break;
            case 6828:
                this.addDofus(DofusEnum.ABYSSAL);
                break;
            case 8393:
                this.addDofus(DofusEnum.EMERAUDE);
                break;
            case 8394:
                this.addDofus(DofusEnum.OCRE);
                break;
            case 8395:
                this.addDofus(DofusEnum.POURPRE);
                break;
            case 8396:
                this.addDofus(DofusEnum.VULBIS);
                break;
            case 8418:
                this.addDofus(DofusEnum.CAWOTTE);
                break;
            case 9088:
                this.addDofus(DofusEnum.IVOIRE);
                break;
            case 10164:
                this.addDofus(DofusEnum.FORGELAVE);
                break;
            case 10269:
                this.addDofus(DofusEnum.ARGENTE);
                break;
            case 11472:
                this.addDofus(DofusEnum.ARGENTE_SCINTILLANT);
                break;
            case 11473:
                this.addDofus(DofusEnum.EBENE);
                break;
            default:
                isDofus = false;
                break;
        }
        if (!isDofus) {
            const commonSpell: BreedSpell | undefined = this.commonSpells.find((breedSpell: BreedSpell) => breedSpell.spell.id === spellId);
            if (commonSpell) {
                commonSpell.isChosen = BreedSpellEnum.CHOSEN;
            } else {
                let isFound = false;
                for (let index = 0; index < this.breedSpells.length && !isFound; index++) {
                    const breedSpell: BreedSpells = this.breedSpells[index];
                    if (breedSpell.spell.spell.id === spellId) {
                        isFound = true;
                        breedSpell.spell.isChosen = BreedSpellEnum.CHOSEN;
                        breedSpell.variant.isChosen = BreedSpellEnum.NOT_CHOSEN;
                    } else if (breedSpell.variant.spell.id === spellId) {
                        isFound = true;
                        breedSpell.spell.isChosen = BreedSpellEnum.NOT_CHOSEN;
                        breedSpell.variant.isChosen = BreedSpellEnum.CHOSEN;
                    }
                }
            }
        }
    }
}
