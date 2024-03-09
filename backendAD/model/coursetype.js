const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://sonu:sonu@cluster0.3frkcq9.mongodb.net/elearning?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let sc=mongoose.Schema;
const typeschema=new sc(
    {
      Cid:String,
      
     Status:String
    }
);

var typemodel =mongoose.model("type",typeschema)
module.exports=typemodel;