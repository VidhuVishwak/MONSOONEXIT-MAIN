const mongoose=require('mongoose')
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String
});
var BlogModel=mongoose.model("card",schema)
module.exports= BlogModel
