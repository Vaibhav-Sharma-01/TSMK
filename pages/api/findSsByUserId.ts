import { NextApiRequest, NextApiResponse } from "next";

let fs = require("fs");
const path = require("path");

let data: any;
export default async (req: NextApiRequest, res: NextApiResponse) => {
  data =req.body;
  const directoryPath1 = path.join(process.cwd(), "assetsonline/" + data.id);
  fs.readdir(directoryPath1, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    // console.log(files);
    files.forEach(function (file) {
      // console.log(file);
    });
  res.send({directory: process.cwd(), file: files});
  })
};