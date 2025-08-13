/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from "fs";
import { error } from "console";
import { type } from "os";


inquirer
.prompt([
    {message:"type in your url",
    name:"URL"
    }
])
.then((answer) => {
    const url=answer.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile("URL.txt",url,(err)=>{
        if(err) throw err;
        console.log("the file have been saved!")
    })
})
.catch((error)=>{
    if(error.isTtyError){

    }
    else{

    }
})
