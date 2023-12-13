import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// inquirer
//     .prompt([
//         {
//         "message": "Enter a URL to generate a QR code",
//         "name": "URL",
//         },
//     ])
//     .then((answers) => {
//         const url = answers.URL;
//         var qrCode = qr.image(url);
//         qrCode.pipe(fs.createWriteStream('qr_img.png'));
//         console.log('QR code saved to qr_img.png');
//     });


    inquirer
    .prompt([
        {
            "message": "Enter a URL to generate a QR code: ",
            "name": "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        var qrCode = qr.image(url);
        qrCode.pipe(fs.createWriteStream('qr_img.png'));
        // console.log('QR code saved to qr_img.png');

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

