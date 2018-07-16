// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient,ObjectID} = require('mongodb');//object destructuring

//12 byte objectid
//4-timeStamp , 3bytes- machineId,2-ProcessId,3-RandomValue

MongoClient.connect("mongodb://localhost:27017/TodosApp",{ useNewUrlParser: true },(err,client) => {
  debugger;// go to chrome://inspect/#devices

  if(err){
    return console.log("Unable to connect to monogdb");
  }

  console.log('Connected to MonogDB Server');

  //Access or create the DB
  var db = client.db('TodosApp')

  db.collection('Todos').findOneAndUpdate({
    "_id" : new ObjectID("5b4b79c1fd8be18cc01d1ca8")
  },
  {
    $set: {
      "text": "eat more lunch...."
    },
    $inc: {
       num:3,
    }
  },{
    "returnOriginal":false
  }).then((result)=>{
    console.log(result);
  })


  //close the connection using client reference
  client.close();
})
