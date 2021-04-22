
var request = require("request")
const fs = require("fs") 
var url = "http://192.168.2.206:8080/api/asset/getByType/sprite"

request({
    url: url,
    json: true,
}, function (error, response, jsonContent) {
    if (!error && response.statusCode === 200) {
        // console.log(jsonContent) // Print the json response
        jsonCont = JSON.stringify(jsonContent);
        console.log(jsonContent);
        fs.writeFile('./sprite.json', jsonCont, 'utf8', (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            } else {
                console.log(`File is written successfully!`);
            }
        
        });
    }
    
}
);