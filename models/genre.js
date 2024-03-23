var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name:{type:String, required:true, maxlength:100},
    url:{type: String, required:true}
  }
);

GenreSchema.virtual('url').get(function(){
return '/catalog/book/' +this._id;

})
//Export model
module.exports = mongoose.model('Genre', GenreSchema);
