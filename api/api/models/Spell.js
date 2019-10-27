/**
 * Spell.js
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

    levels: {
      collection: 'spellGrade',
      via: 'spell'
    },

    variant: {
      model: 'spell',
      unique: true
    },

    mobs: {
      collection: 'mob',
      via: 'spells'
    },

    dreamMobs: {
      collection: 'mob',
      via: 'dreamSpells'
    },

    paradoxMobs: {
      collection: 'mob',
      via: 'paradoxSpells'
    },

    nightmareMobs: {
      collection: 'mob',
      via: 'nightmareSpells'
    }
  }

};

