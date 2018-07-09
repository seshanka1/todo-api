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

  //Access the Collection using DB reference
  var todosCollectionRef = db.collection('Todos');

 //insert the document using collection Reference

  todosCollectionRef.insertOne({
    text: 'Something to do',
    complete: true
  }, (err,result) => {
    if(err){
      return console.log("error saving ",err);
    }
    console.log(JSON.stringify(result.ops,undefined,2/*indentation*/));
  })

  var UsersCollectionRef = db.collection('Users');
  UsersCollectionRef.insertOne({
    name:'Venkata',
    age: 30,
    location: 'Malkajgiri, Hyderabad'
  },(err,result) => {
    if(err){
      return console.log('error : ',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  })

  //close the connection using client reference
  client.close();
})
