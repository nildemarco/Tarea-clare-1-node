const fs = require('fs');
const http = require('http');
const prettyMilliseconds = require('pretty-ms');

// fs.writeFileSync('assets/texto-3.txt', "Hola soy otro texto");

// const readText = () => {
//     for (let i = 1; i <= 3; i++) {
//         fs.readFile(`assets/texto-${i}.txt`, 'utf-8', (err, data) => { console.log(data.toUpperCase()) })
//     }
// }

// readText()

// const readTextAndCreate = () => {
//     let content = ''
//     for (let i = 1; i <= 3; i++) {
//         fs.readFile(`assets/texto-${i}.txt`, 'utf-8', (err, data) => {
//             content = content + data;
//             if (i = 3) {
//                 fs.writeFileSync('assets/texto-4.txt', content);
//             }
//         })
//     }

// }

// readTextAndCreate()

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("Gatitos!");
//     }
//     else if (req.url === "/mostrargatito") {
//         res.end(` <div><h1> Gatitos! </h1>
//             <img src="http://www.placekitten.com/300">
//           </div>`)
//     }
//     else if (req.url === '/fotosgatitos') {
//         res.end(fs.readFileSync('assets/gatitos.txt', 'utf-8'))
//     }
//     else {
//         res.writeHead(404, {
//             'Content-type': 'text/html'
//         })
//         res.end(`Error 404`)
//     }
// })

// server.listen(8081)

const fechaActual = new Date();

const navidad = new Date(2020, 11, 25);

const myBirthday = new Date(2020, 07, 05).getTime();

const timeToMyBirthday = prettyMilliseconds(myBirthday);

console.log(fechaActual)
console.log(myBirthday);

console.log(timeToMyBirthday)