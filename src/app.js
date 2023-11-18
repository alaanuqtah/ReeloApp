const fs = require('fs');
const Question = require('./models/question');
const QuestionService = require('./services/questionService');
const QuestionPaperService = require('./services/questionPaperService');

const sampleData = JSON.parse(fs.readFileSync('sampleData.json', 'utf-8'));

const questionService = new QuestionService();
const questionPaperService = new QuestionPaperService(questionService);

sampleData.forEach((data) => {
  questionService.addQuestion(new Question(data.question, data.subject, data.topic, data.difficulty, data.marks));
});

const totalMarks = 100;
const distribution = { Easy: 20, Medium: 50, Hard: 30 };
const questionPaper = questionPaperService.generateQuestionPaper(totalMarks, distribution);

console.log("Generated Question Paper:", questionPaper);
