/**
 * Mob.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    complementaryMonster: {
      model: 'mob',
      unique: true
    },

    race: {
      type: 'string'
    },

    family: {
      type: 'string'
    },

    grades: {
      collection: 'mobGrade',
      via: 'mob'
    },

    spells: {
      collection: 'spell',
      via: 'mobs'
    },

    dreamSpells: {
      collection: 'spell',
      via: 'dreamMobs'
    },

    paradoxSpells: {
      collection: 'spell',
      via: 'paradoxMobs'
    },

    nightmareSpells: {
      collection: 'spell',
      via: 'nightmareMobs'
    },

    subareas: {
      collection: 'subarea',
      via: 'mobs'
    },

    type: {
      type: 'number',
      required: true
    },

    canPlay: {
      type: 'boolean'
    },

    canTackle: {
      type: 'boolean'
    },

    canBePushed: {
      type: 'boolean'
    },

    canSwitchPos: {
      type: 'boolean'
    },

    allIdolsDisabled: {
      type: 'boolean'
    },

    incompatibleIdols: {
      collection: 'idol',
      via: 'mobs'
    },

    incompatibleChallenges: {
      collection: 'challenge',
      via: 'mobs'
    },

    aggressiveZoneSize: {
      type: 'number'
    },

    excludeEffects: {
      collection: 'spellEffect',
      via: 'excludeMonsters'
    },

    forbiddenEffects: {
      collection: 'spellEffect',
      via: 'forbiddenMonsters'
    },

    includeEffects: {
      collection: 'spellEffect',
      via: 'includeMonsters'
    }
  }

};

