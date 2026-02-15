let express=require("express")
const { dbConnection, ObjectId } = require("./dbConnection.")
let app=express()


app.use(express.json())

app.get("/student-read",async(req,res)=>{
let mydb=await dbConnection();
let studentCollection=mydb.collection("students")
let data=await studentCollection.find().toArray();
let resobj={
    status:1,
    msg:"Student List",
    data
}
res.send(resobj)
})
app.post("/student-insert",async(req,res)=>{
    let mydb=await dbConnection();
    let studentCollection=mydb.collection("students");
    let{SName,SEmail}=req.body;
    let obj={SName,SEmail}
    let insertres=await studentCollection.insertOne(obj)
    let resobj={
        Status:1,
        msg:"Data Insert",
        insertres
    } 
    res.send(resobj)
})
app.delete("/student/delete/:id", async (req, res) => {
    let {id}=req.params;
    let mydb=await dbConnection();
    let studentCollection=mydb.collection("students")
    let deleteres=await studentCollection.deleteOne({_id:new ObjectId(id)})
    let resobj={
        Status:1,
        msg:"Data delete",
        deleteres 
    };
    res.send(resobj)
});
app.put("/students/update/:id",async(req,res)=>{
    let {id}=req.params;
    let {SName ,SEmail}= req.body;
    let obj={SName,SEmail}
    let mydb=await dbConnection();
    let studentCollection=mydb.collection("students");
    let Updateres=await studentCollection.updateOne({_id: new ObjectId(id)},{$set: {SName,SEmail}})
    let resobj={
        status:1,
        msg:"Data Update",
        Updateres
    }
    res.send(resobj)
})
app.listen("8000")
