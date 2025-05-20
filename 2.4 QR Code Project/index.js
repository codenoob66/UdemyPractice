

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

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

  qr_svg.pipe(fs.createWriteStream('test.png'))
    .on('finish', () => {
      console.log('file has been saved');
    })
    .on('error', (error) => {
      throw error;
    });
});
