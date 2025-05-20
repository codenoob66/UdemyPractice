const { error } = require("console")

fs.writeFile("message.txt", "hello from the otherside", (error) => {
    if(error) throw error;
    console.log("file has been saved")
})

fs.readFile("message.txt", "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data)
})
