const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://sonu:sonu@cluster0.3frkcq9.mongodb.net/elearning?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let sc=mongoose.Schema;
const userschema=new sc(
    {
      fname:String,
      lname:String,
      pnumber:String,
      email:String,
      password:String,
    }
);

var usermodel =mongoose.model("user",userschema)
module.exports=usermodel;