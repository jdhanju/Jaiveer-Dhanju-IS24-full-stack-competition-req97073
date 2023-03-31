const fs = require("fs");

//Given a url to a text file this function will return a json string of product data
function fetchDataFromTextFile(url){

    //using readFileSync allows our program to wait for our file to be read before continuing
    const data = fs.readFileSync(url, "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    return jsonString;
    });
    return data;
}

//When a client preforms a HTTP POST request this function is ran.
//We are updating our text file or database to store our new product
async function AddDataToTextFile(url, newList){
 await fs.writeFileSync(url, newList, function(err) {
    if (err) {
        console.log(err);
    }
    });
}

module.exports = { fetchDataFromTextFile, AddDataToTextFile };