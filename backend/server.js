const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
//  const bodyParser=require('body-parser')

const app=express()
app.use(cors());
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://gurubaran20082002:qvE3vUPFy88seCEH@cluster0.zg0r6sp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbName = 'gurubaran20082002';

const con=mysql.createConnection({
  host:"154.41.233.52",
  user:"u913997673_guruadmin",
  password:"Bi?a/l6iyLcm[]gK",
  database:"u913997673_guru"
});


app.post('/insert',(req,res)=>{
  const collectionName = 'road';
  
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


  try {
    
    client.connect();
    console.log('Connected to MongoDB');


    const db = client.db(dbName);
    const collection = db.collection(collectionName);

 // Data to be inserted
    const newData = {...req.body}


    const result = collection.insertOne(newData);
    console.log('Inserted document ID:', result.insertedId);
    return res.json(result.insertedId);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
  }
  
    
});

app.post('/pcb',(req,res)=>{

  const collectionName = 'pcb';
  
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


  try {
    
    client.connect();
    console.log('Connected to MongoDB');


    const db = client.db(dbName);
    const collection = db.collection(collectionName);

 // Data to be inserted
    const newData = {...req.body}


    const result = collection.insertOne(newData);
    console.log('Inserted document ID:', result.insertedId);
    return res.json(result.insertedId);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
  }
  
    
});
app.post('/tneb',(req,res)=>{

  const collectionName = 'tneb';
  
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


  try {
    
    client.connect();
    console.log('Connected to MongoDB');


    const db = client.db(dbName);
    const collection = db.collection(collectionName);

 // Data to be inserted
    const newData = {...req.body}


    const result = collection.insertOne(newData);
    console.log('Inserted document ID:', result.insertedId);
    return res.json(result.insertedId);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
  }
  
    
});
app.post('/path',(req,res)=>{
  const sql="INSERT INTO signup(name,email,mobile_no,password,dob,gender,	district,security_qn,security_ans)VALUES('"+req.body.state.sname+"','"+req.body.state.email+"',"+req.body.state.mob+",'"+req.body.state.pas+"','"+req.body.state.dob+"','"+req.body.state.gen+"','"+req.body.state.dist+"','"+req.body.state.sec_qn+"','"+req.body.state.sec_ans+"');"	

  console.log(sql)
  con.query(sql,(err,data)=>
  {
    if(err) 
    return res.json(err);
  return res.json(data);
  })
}
)


app.post("/login",(req,res)=>{
  const sql="SELECT * FROM signup WHERE email='"+req.body.sstate.email+"' and password='"+req.body.sstate.pass+"'";
  console.log(sql);
  con.query(sql,(err,data)=>{
if(err)
return res.json(err);
if(data.length > 0)
    return res.json(req.body.sstate.email);  
    return res.json('no');
  })
}
)

app.listen(8081,()=>{console.log("Working")})