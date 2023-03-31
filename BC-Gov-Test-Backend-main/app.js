
const express = require('express');
const DataHandler = require('./data');
const bodyParser = require('body-parser')
const cors = require('cors')
  
const DATA_URL = "./products.txt";
let productData = DataHandler.fetchDataFromTextFile(DATA_URL);
const app = express();
const PORT = 3000;

// parse application/json
app.use(bodyParser.json())

 //run server 
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

//enabling cors policy
app.use(cors())

//Get request for getting all products
app.get('/api/getAllProducts', function routeHandler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    res.send(productData);
  });

//post reuqest for adding a new product
app.post('/api/addProduct', function routeHandler(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const data = req.body;
    let newproductID = Math.random().toString(16).slice(2);
    const dataObjectWithProductID = Object.assign({'productId': newproductID}, data);
    //unstringify
    const productDataArray = JSON.parse(productData);
    productDataArray.push(dataObjectWithProductID);
    //update our text file to store our new product
    DataHandler.AddDataToTextFile(DATA_URL, JSON.stringify(productDataArray));
    productData = JSON.stringify(productDataArray);
    console.log("posted");
    res.send(JSON.stringify(dataObjectWithProductID));
});