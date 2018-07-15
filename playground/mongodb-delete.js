// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient,ObjectID} = require('mongodb');//object destructuring

//12 byte objectid
//4-timeStamp , 3bytes- machineId,2-ProcessId,3-RandomValue

MongoClient.connect("mongodb://localhost:27017/TodosApp",(err,client) => {
  debugger;// go to chrome://inspect/#devices

  if(err){
    return console.log("Unable to connect to monogdb");
  }

  console.log('Connected to MonogDB Server');

  //Access or create the DB
  var db = client.db('TodosApp')

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })


  //deleteOne
  db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
    console.log(result);
  })

  //findOneAndDelete


  //close the connection using client reference
  client.close();
})
