const Question = require('../models/question');

class QuestionService {
  constructor() {
    this.questionStore = [];
  }

  addQuestion(question) {
    this.questionStore.push(question);
  }

  getQuestionsByDifficulty(difficulty) {
    return this.questionStore.filter((q) => q.difficulty === difficulty);
  }
}

module.exports = QuestionService;
