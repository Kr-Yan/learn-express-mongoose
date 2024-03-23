var mongoose = require('mongoose');
const author = require('./author');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title:{type:String, required:true, maxLength:100},
    author:{type:Schema.Types.ObjectId, ref: 'Author', required:true, maxLength:100},
    summary:{type: String},
    ISBN:{type:Int},
    genre:[GenreSchema],
    url:{type:String, required:true}
  }
);

BookSchema.virtual('url').get(function(){
  return '/catalog/book/' +this._id;
})

//Export model
module.exports = mongoose.model('Book', BookSchema);
