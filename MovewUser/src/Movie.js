import fs from "fs"
function movie(req,res,next){
    try{
        
        let{movieId,name,ticketprice}=req.body;
        if(movieId || name || ticketprice){
            return movie.status(400).send("Alll field are required");
        }
        let users=[];
        if(fs.existsSync("movie.json")){
            let data= fs.readFileSync("movie.json", "utf-8");
            users=JSON.parse(data);
            let isUser=movie.find((value)=>value.name=== name);
    
        }
        const newUser= {
            movieId: Date.new(),
            name,
            ticketprice
        }
            
        users.push(newUser);

    fs.writeFileSync("movie.json", JSON.stringify(users, null, 2));

    movie.status(201).send("User created successfully");

  } catch (error) {
    console.error(error);
  }
}
export default movie