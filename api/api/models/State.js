/**
 * State.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{
      type: 'string',
      required: true
    },

    preventsSpellCast: {
      type:'boolean',
      defaultsTo: false
    },

    preventsFight: {
      type:'boolean',
      defaultsTo: false
    },

    isSilent: {
      type:'boolean',
      defaultsTo: false
    },

    cantBeMoved: {
      type:'boolean',
      defaultsTo: false
    },

    cantBePushed: {
      type:'boolean',
      defaultsTo: false
    },

    cantDealDamage: {
      type:'boolean',
      defaultsTo: false
    },

    cantSwitchPosition: {
      type:'boolean',
      defaultsTo: false
    },

    incurable: {
      type:'boolean',
      defaultsTo: false
    },

    invulnerable: {
      type:'boolean',
      defaultsTo: false
    },

    invulnerableMelee: {
      type:'boolean',
      defaultsTo: false
    },

    invulnerableRange: {
      type:'boolean',
      defaultsTo: false
    },

    authorizedSpellGrades: {
      collection: 'spellGrade',
      via: 'authorizedStates'
    },

    forbiddenSpellGrades: {
      collection: 'spellGrade',
      via: 'forbiddenStates'
    },

    requiredSpellGrades: {
      collection: 'spellGrade',
      via: 'requiredStates'
    },

    effects: {
      collection: 'spellEffect',
      via: 'requiredStates'
    }

  },

};

