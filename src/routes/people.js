const express = require("express");
const request = require("../utils/request");
const controller = require("../controllers/people");

const router = express.Router();

router.get("/", (req, res) => {
  request
    .get(`${process.env.API_URL}/people`)
    .then(({ status, data }) => {
      return res.status(status).json(controller.list(data));
    })
    .catch(({ message }) => res.status(500).json({ message }));
});

router.get("/:email", (req, res) => {
  const { email } = req.params;
  return res.status(200).json(controller.getCount(email));
});

module.exports = router;
