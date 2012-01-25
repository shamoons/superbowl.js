// entityModelTest.js

var Entity = require('../../models/entityModel');

var vows = require('vows'),
    assert = require('assert');

vows.describe('entityModel').addBatch({
  'when asking for entities next to 0,0': {
    topic: Entity.findNear(0,0),
      'we get items within 8 screens of 0,0': function (err, entities) {
        assert.notNull(entities);
    }
  }
}).run(); 