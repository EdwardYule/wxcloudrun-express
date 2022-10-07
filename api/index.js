const path = require("path");
const randomName = require('chinese-random-name');
const { getIdCard } = require('utils/utils');

export default {
  "/": {
    method: 'get',
    handler: async (req, res) => {
      res.sendFile(path.join(__dirname, "index.html"));
    }
  },
  "/favicon.ico": {
    method: 'get',
    handler: async (req, res) => {
      res.sendFile(path.join(__dirname, "favicon.ico"));
    }
  },
  "/api/personList": {
    method: 'get',
    handler: async (req, res) => {
      res.send({
        code: 0,
        data: [
          {
            name: randomName.generate(),
            idCard: getIdCard(),
          },
          {
            name: randomName.generate(),
            idCard: getIdCard(),
          },
          {
            name: randomName.generate(),
            idCard: getIdCard(),
          },
        ],
      });
    }
  }
}