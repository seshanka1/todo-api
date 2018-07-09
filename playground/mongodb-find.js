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

todosCollectionRef.find({complete: false}).toArray().then((docs) => {
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined/*filter*/,2/*indentation*/));
},(err) => {
  console.log("unable to find",err);
})

todosCollectionRef.find({
  _id: new ObjectID('5b4256c603967d284cb74dc8')
}).toArray().then((docs) => {
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined/*filter*/,2/*indentation*/));
},(err) => {
  console.log("unable to find",err);
})

todosCollectionRef.find().count().then((count) => {
  console.log(`Todos count : ${count}`);

},(err) => {
  console.log("unable to find",err);
})

  //close the connection using client reference
  client.close();
})
