import { NextApiRequest, NextApiResponse } from "next";

let fs = require("fs");
const path = require("path");

let data: any;
export default async (req: NextApiRequest, res: NextApiResponse) => {
  data = req.body;
    handle();
    res.json("started");
};

const handle = () => {
  const directoryPath1 = path.join(process.cwd(), "assetsonline/" + data.id);
  try {
    fs.unlinkSync(directoryPath1+"/"+data.name)
  } catch(err) {
    console.error(err)
  }
};
