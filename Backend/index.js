const express=require('express');
const cors=require('cors');
const app= express();
const PORT= 15000;
const postgres=require('postgres');
require('dotenv').config();  
console.log("DATABASE_URL:", process.env.DATABASE_URL);
const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString,{ ssl: { rejectUnauthorized: false } })
app.use(cors({
    origin:'http://localhost:5501'
}));
app.use(express.json());

app.post('/Register',async (req,res)=>{

    const {participants,event,url}=req.body;
    //console.log(event);
    try{
      const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = ${event}
      ) AS table_exists;
    `;//check for table
    const tableExists=tableCheck[0].table_exists;
    //console.log(tableExists)
    if(!tableExists)
    {
        await sql`
            create table ${sql(event)} (
                TeamNo INTEGER NOT NULL,
                Name TEXT,
                Email TEXT,
                Payment_URL TEXT
            )
        `//create table
        participants.map(async (participant,index)=>{await sql`
            INSERT INTO ${sql(event)} VALUES(1,${participant.name},${participant.email},${url})
        `})//add first team
    }
    else{
        const max=await sql`
            SELECT MAX(TeamNo) AS max FROM ${sql(event)};
        `//check no of teams
        const id=max[0].max+1;
        participants.map(async (participant,index)=>{await sql`
            INSERT INTO ${sql(event)} VALUES(${id},${participant.name},${participant.email},${url})
        `})//add new team
        
    }
    res.json({message:"registered"});
    }
    catch(error){ console.error(error);}
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})