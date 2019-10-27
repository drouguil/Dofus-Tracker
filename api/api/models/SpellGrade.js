/**
 * SpellGrade.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    actionPoints: {
      type: 'number',
      required: true
    },

    castInDiagonal: {
      type: 'boolean',
      defaultsTo: false
    },

    castInLine: {
      type: 'boolean',
      defaultsTo: false
    },

    castLineOfSight: {
      type: 'boolean',
      defaultsTo: false
    },

    criticalProbability: {
      type: 'number',
      required: true
    },

    editableRange: {
      type: 'boolean',
      defaultsTo: false
    },

    globalCooldown: {
      type: 'number',
      required: true
    },

    initialCooldown: {
      type: 'number',
      required: true
    },

    maxCastPerTarget: {
      type: 'number',
      required: true
    },

    maxCastPerTurn: {
      type: 'number',
      required: true
    },

    maxStack: {
      type: 'number',
      required: true
    },

    minCastInterval: {
      type: 'number',
      required: true
    },

    minRange: {
      type: 'number',
      required: true
    },

    needFreeCell: {
      type: 'boolean',
      defaultsTo: false
    },

    needFreeTrapCell: {
      type: 'boolean',
      defaultsTo: false
    },

    needTakenCell: {
      type: 'boolean',
      defaultsTo: false
    },

    range: {
      type: 'number',
      required: true
    },

    criticalEffects: {
      collection: 'spellEffect',
      via: 'criticalSpellGrades'
    },

    effects: {
      collection: 'spellEffect',
      via: 'spellGrades'
    },

    authorizedStates: {
      collection: 'state',
      via: 'authorizedSpellGrades'
    },

    forbiddenStates: {
      collection: 'state',
      via: 'forbiddenSpellGrades'
    },

    requiredStates: {
      collection: 'state',
      via: 'requiredSpellGrades'
    },

    spell: {
      model: 'spell'
    }
  },

};

