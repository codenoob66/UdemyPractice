const { error } = require("console")
const fs = require("fs")


fs.writeFile("message2.txt","Hello form lineage", (err) => {
    if(err) throw error;
    console.log("file has been saved")
});
