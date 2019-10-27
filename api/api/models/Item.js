/**
 * Item.js
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
    
    image: {
      type: 'number',
      required: true
    },

    drops: {
      collection: 'drop',
      via: 'item'
    }
  }

};

