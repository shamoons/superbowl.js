var mongoose = require('mongoose');

var WidgetSchema = new mongoose.Schema({
	addedOn     : Date
  , data   	 	: mongoose.Schema.Types.Mixed 
  , location	: { 
      x: Number
    , y: Number
   }
  , username    : String
});

// WidgetSchema.pre('save', function (next) {
//   this.markModified('data');
//   next();
// });
// 
// WidgetSchema.statics.findNear = function search (x, y, cb) {
//   return this.find({ location : { $near : [ y, x ], /* $maxDistance : 500/111.2 */ } }, cb)
// }
// 
// WidgetSchema.methods.findNeighbors = function findSimilarType (cb) {
//   return this.findNear(this.location.x, this.location.y, cb);
// };

module.exports = mongoose.model('Widget', WidgetSchema);