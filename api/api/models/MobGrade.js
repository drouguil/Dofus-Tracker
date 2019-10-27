/**
 * MobGrade.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    level: {
      type: 'number',
      required: true
    },

    lifePoints: {
      type: 'number',
      required: true
    },

    actionPoints: {
      type: 'number',
      required: true
    },

    movementPoints: {
      type: 'number',
      required: true
    },

    apDodge: {
      type: 'number',
      required: true
    },

    mpDodge: {
      type: 'number',
      required: true
    },

    wisdom: {
      type: 'number',
      required: true
    },

    strength: {
      type: 'number',
      required: true
    },

    intelligence: {
      type: 'number',
      required: true
    },

    chance: {
      type: 'number',
      required: true
    },

    agility: {
      type: 'number',
      required: true
    },

    resNeutral: {
      type: 'number',
      required: true
    },

    resEarth: {
      type: 'number',
      required: true
    },

    resFire: {
      type: 'number',
      required: true
    },

    resWater: {
      type: 'number',
      required: true
    },

    resAir: {
      type: 'number',
      required: true
    },

    reflect: {
      type: 'number',
      required: true
    },

    experience: {
      type: 'number',
      required: true
    },

    drops: {
      collection: 'drop',
      via: 'mobGrades'
    },

    aggressiveLevel: {
      type: 'number',
      required: true
    },

    mob: {
      model: 'mob'
    }

  },

};

