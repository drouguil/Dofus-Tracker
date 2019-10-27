/**
 * SpellAction.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    function: {
      type: 'number',
      required: true
    },

    spellLevel: {
      type: 'number',
      required: true
    },

    type: {
      type: 'number',
      required: true
    },

    value: {
      type: 'number',
      required: true
    },

    effects: {
      collection: 'spellEffect',
      via: 'actions'
    }

  },

};

