//inserting data in database
//use sristidb
db.items.insertOne({name:"phone",price:20000,sold:98})
//for one
db.items.insertMany
//for many
db.items.find()
//see all the data
//data gets stored even after weclose the mongo d process and rerun it again after some time

//search items
db.items.find({})
              //filter object 
db.items.find({price:{$gte:58}})   //greater than or equl to 58
//gt=greater than
//lt=less than

//and operator
({price:{$gte: },sold:{$gte: }})

//or operator
({ $or:[{price:{$gte: 86}},{sold:{$lt:80}}]})

//to see only price of the objects
db.items.find({price:{$gte:50}}, {price:1}) 

{price:1,sold:1}
//shows price and sold

//delete
db.items.delteOne({}) .deleteMany({})

//update
.updateOne({filter},{$set: {price:}})
.updateMany({},{{}})