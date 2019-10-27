/**
 * SpellEffect.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    delay: {
      type: 'number',
      required: true
    },

    description: {
      type: 'string'
    },

    duration: {
      type: 'number',
      required: true
    },

    probability: {
      type: 'number',
      required: true
    },

    actions: {
      collection: 'spellAction',
      via: 'effects'
    },

    excludeMonsters: {
      collection: 'mob',
      via: 'excludeEffects'
    },

    forbiddenMonsters: {
      collection: 'mob',
      via: 'forbiddenEffects'
    },

    includeMonsters: {
      collection: 'mob',
      via: 'includeEffects'
    },

    picture: {
      model: 'picture'
    },

    requiredStates: {
      collection: 'state',
      via: 'effects'
    },

    zone: {
      model: 'spellZone',
      via: 'effects'
    },

    criticalSpellGrades: {
      collection: 'spellGrade',
      via: 'criticalEffects'
    },

    spellGrades: {
      collection: 'spellGrade',
      via: 'effects'
    }

  },

};

