const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const awesomeFunction = (Req, res) => {
  res.send("Hello World!");
};

const tooeleTechFunction = (Req, res) => {
  res.json("Tooele Tech is Awesome!");
};

const getAllStudents = async (req, res) => {
  try {
    const db = mongodb.getDb().db("test");

    const students = await db
      .collection("students")
      .find({})
      .toArray();

    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error getting students",
      error: error.message,
    });
  }
};

module.exports = { awesomeFunction, tooeleTechFunction, getAllStudents };
