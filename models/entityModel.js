var mongoose = require('mongoose');

var EntitySchema = new mongoose.Schema({
	addedOn     : Date
  , data   	 	: mongoose.Schema.Types.Mixed 
  , location	: { 
      x: Number
    , y: Number
   }
  , username    : String
});

EntitySchema.pre('save', function (next) {
  this.markModified('data');
  next();
});

EntitySchema.statics.findNear = function search (x, y, cb) {
  return this.find({ location : { $near : [ y, x ], /* $maxDistance : 500/111.2 */ } }, cb)
}

EntitySchema.methods.findNeighbors = function findSimilarType (cb) {
  return this.findNear(this.location.x, this.location.y, cb);
};

module.exports = mongoose.model('Entity', EntitySchema);