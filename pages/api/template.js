// pages/api/data
import nc from "next-connect";
import cors from "cors";

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get("/", (req, res) => {
    // console.log("content", content);
    res.sendFile(path.resolve(__dirname, "template.html"));
  })
  .post("/template", (req, res) => {
    console.log("inside template function", req.body);
    // template =  JSON.stringify(req.body.result);
    template = req.body.htmlString;
    var fs = require("fs");
    fs.writeFile("./test.html", template, function (err) {
      if (err) {
        // append failed
      } else {
        // done
      }
    });
  })
  .put(async (req, res) => {
    res.end("hello");
  });

export default handler;
