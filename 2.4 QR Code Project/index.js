

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";
import { error } from "console";

inquirer
  .prompt([
    {
      message: "Type your url/text here",
      name: "URL",
    },
  ])
.then((answers) => {
  const url = answers.URL;
  const qr_svg = qr.image(url);
  
  qr_svg.pipe(fs.createWriteStream("qr-image.png"))

  fs.writeFile("URL.txt", url, (error) => {
    if(error) throw error;
    console.log("file has been saved")
  }) 
});
