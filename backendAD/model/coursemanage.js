const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://sonu:sonu@cluster0.3frkcq9.mongodb.net/elearning?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let sc=mongoose.Schema;
const courseschema=new sc(
    {
      Cid:String,
      Ctitle:String,
      Category:String,
      Description:String,
      
      notes:String     
      //File:File
      
    }
);

var coursemodel =mongoose.model("course",courseschema)
module.exports=coursemodel;