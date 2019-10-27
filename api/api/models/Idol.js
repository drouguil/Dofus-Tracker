/**
 * Idol.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      unique: true,
      required: true
    },

    level: {
      type: 'number',
      min: 1,
      max: 200,
      required: true
    },

    score: {
      type: 'number',
      min: 1,
      max: 100,
      required: true
    },

    mobs: {
      collection: 'mob',
      via: 'incompatibleIdols'
    }
  }

};
