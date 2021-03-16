


// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

// switch()


// export default create = ( (req, res) =>{
//   res.status(200).json({msg: "hitting create in next"})
//   console.log(req.body.templateData)
//   content = req.body.templateData
//   var fs = require('fs')
// fs.writeFile('./public/css/styles.css', req.body.templateData.css, function (err) {
//   if (err) {
//     // append failed
//   } else {
//     // done
//   }
// })
// fs.writeFile('./template.html', 
//   `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//     ${req.body.templateData.css}
//     </style>
//   </head>
//   <body>
//     ${req.body.templateData.html}
//   </body>
//   </html>`, function (err) {
//   if (err) {
//     // append failed
//   } else {
//     // done
//   }
// })
// });