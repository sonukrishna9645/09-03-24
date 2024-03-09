const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://sonu:sonu@cluster0.3frkcq9.mongodb.net/elearning?retryWrites=true&w=majority")
.then(()=>{console.log("DB Connected")})
.catch(err=>console.log(err));
const logschema=new mongoose.Schema({
username:String,
password:String,
}
);
var adminmodel=mongoose.model("Adminlogin",logschema)
module.exports=adminmodel