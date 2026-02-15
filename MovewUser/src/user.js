import fs from "fs"
function user(req,res,next){
    try{
        
        let{userId, name, userType}=req.body;
        if(userId || name || userType){
            return movie.status(400).send("Alll field are required");
        }
        let users=[];
        if(fs.existsSync("user.json")){
            let data= fs.readFileSync("user.json", "utf-8");
            users=JSON.parse(data);
            let isUser=movie.find((value)=>value.name=== name);
    
        }
        const newUser= {
            userIdId: Date.new(),
            name,
            userType
        }
            
        users.push(newUser);

    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));

    user.status(201).send("User created successfully");

  } catch (error) {
    console.error(error);
  }
}
export default user