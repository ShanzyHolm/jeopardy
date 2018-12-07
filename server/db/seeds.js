use jeopardy-db;
db.dropDatabase();

db.questions.insertMany([
  {
    question: "",
    answer: "",
    pointvalue: ""
  },
  {
    question: "",
    answer: "",
    pointvalue: ""
  },
  {
    question: "",
    answer: "",
    pointvalue: ""
  },
]);
