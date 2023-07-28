const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

//fruit
const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String,
});

const Fruit = mongoose.model('Fruit',fruitSchema );

const bananna = new Fruit({
    name:"bananna",
    rating:7,
    review:"solid as a fruit",
});
const orqµange = new Fruit({
    name:"orqµange",
    rating:7,
    review:"solid as a fruit",
});

//personne
const personneSchima = new mongoose.Schema({
    name:String,
    age:Number,
    review:String,
});
const People = mongoose.model('people',personneSchima );

const lidane = new People({
    name:"dane",
    age:7,
    review:"solid as a fruit",
});
const mek = new People({
    name:"mekkkk",
    age:7,
    review:"solid as a fruit",
});

 //HOW TO INSERT DATA FROM FRUIT TABLE /COLLECTION

/*Fruit.insertMany([bananna,orqµange,lidane]).then(function () {
    console.log("Successfully saved defult fruits to DB");
  }).catch(function (err) {
    console.log(err);
  });

//HOW TO INSERT MANY DATA FROM PEOPLE TABLE /COLLECTION
  People.insertMany(lidane).then(function () {
    console.log("Successfully saved defult people to DB");
  }).catch(function (err) {
    console.log(err);
  });*/

 //HOW TO FIND DATA FROM PEOPLE TABLE /COLLECTION
  People.find().then(function (peop) {
    //console.log("people" + peop);
    peop.forEach(element => {
        //console.log(element.name);
    });
  }).catch(function (err) {
    console.log(err);
  });
 //HOW TO FIND DATA FROM fRUIT TABLE /COLLECTION
  Fruit.find().then(function (fruit) {
    //console.log("Fruits" + peop);
    fruit.forEach(element => {
        //console.log(element.name);
    });
  }).catch(function (err) {
    console.log(err);
  });

   //HOW TO update DATA FROM PEOPLE TABLE /COLLECTION

   Fruit.updateOne({name: 'dane'},{ review: 'solid as a person'}).then(function (fruit) {
    console.log("success" );
    }).catch(function (err) {
    //console.log(err);
  });
  //HOW TO Delete DATA FROM PEOPLE TABLE /COLLECTION
  Fruit.deleteMany({name: 'orqµange'});