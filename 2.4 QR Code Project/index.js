/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "fs"
import qr from "qr-image"


inquirer
  .prompt([
    "Please write what you want to convert to qr code via svg"
  ])
  .then((answers) => {
    
const qr_svg = qr.image('I love QR!', { type: 'svg' });

fs.writeFile("URL.txt", `${qr_svg}`, (error) => {
    if(error) throw error;
    console.log("file has been saved")
})
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

