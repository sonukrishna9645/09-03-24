const express=require("express")
const cors=require("cors")

const app=new express();

const coursemodel=require('./model/coursemanage');
const adminmodel=require('./model/adminlogin');
const usermodel=require('./model/usersign');
const typemodel=require('./model/coursetype');
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


app.get('/',(request,response)=>{
    response.send("hai")
})

//for create button
app.post('/cnew',(request,response)=>{
    console.log("jdsasd")
    new coursemodel(request.body).save();
    response.send("Record Sucessfully Saved")
})
 
app.post('/tnew',(request,response)=>{
  console.log("hello")
  new typemodel(request.body).save();
  response.send("Record Sucessfully Saved")
})


app.post('/Loginsearch', async (request, response) => {
    const { username, password } = request.body;
    console.log(request.body)
    try {
        const user = await adminmodel.findOne({ username,password });
      
        if (user) {
          response.json({ success: true, message: 'Login successful' });
        }
         else {
          response.json({ success: false, message: 'Invalid Password and email' });
        }
      } catch (error) {
        response.status(500).json({ success: false, message: 'Error during login' });
      }
  
})

app.get('/view',async (request,response)=>{
    var data=await coursemodel.find();
    response.send(data)    
} )
app.get('/view1/:id',(request,response)=>{
  const{id}=request.params
  coursemodel.findById(id).then(data=>{
      response.send(data)
  })
})
app.get('/view2/:id',(request,response)=>{
  const{id}=request.params
  coursemodel.findById(id).then(data=>{
      response.send(data)
  })
})
// app.get('/view1/:id',async (request,response)=>{
  
//   let id=request.params.id;
//     await coursemodel.findById(id,request.body)
//   response.send(data)    
// } )
app.put('/cedit/:id',async(request,response)=>{
    let id=request.params.id;
    await coursemodel.findByIdAndUpdate(id,request.body)
    response.send("Data updated")
})

app.post('/newuser',(request,response)=>{
  console.log("user")
  new usermodel(request.body).save();
  response.send(" Sucessfully Registered")
})

app.listen(4000,(request,response)=>{
    console.log("Port is running in 4000")
})
app.post('/new',upload.single('image1'),async(request,response)=>{
  // try{
      console.log(request.body)
      console.log(request.file)
      const{MovieId,MovieName,Discription,Language,Genre}=request.body
      const newdata=Moviemodel({
          MovieId,MovieName,Language,Discription,Genre,
          image1:{
              data:request.file.buffer,
              contentType:request.file.mimetype,
          }
      })
      console.log("New data:",newdata);
      await newdata.save();
      
      response.status(200).json({message:'record saved'});
  // }
  // catch(error)
  // {
  //     response.status(500).json({error:'internal server error'})
  // }
})
