const path = require("path");
const randomName = require('chinese-random-name');
const { getIdCard } = require('../utils');

module.exports = {
  "/": {
    method: 'get',
    handler: async (req, res) => {
      res.sendFile(path.join(path.resolve(__dirname, "../public"), "index.html"));
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