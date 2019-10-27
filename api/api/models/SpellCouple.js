/**
 * SpellCouple.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    breed: {
      type: 'number',
      min: 1,
      max: 18,
      required: true
    },

    spell: {
      model: 'spell',
      unique: true,
      required: true
    },

    variant: {
      model: 'spell',
      unique: true,
      required: true
    }
  }

};

