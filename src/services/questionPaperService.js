const DistributionCalculator = require('../utils/distributionCalc');

class QuestionPaperService {
  constructor(questionService) {
    this.questionService = questionService;
  }

  generateQuestionPaper(totalMarks, distribution) {
    const questionPaper = [];
    const distributionCalculator = new DistributionCalculator(distribution);

    for (const [difficulty, percentage] of Object.entries(distribution)) {
      const difficultyQuestions = this.questionService.getQuestionsByDifficulty(difficulty);
      const difficultyMarks = distributionCalculator.calculateMarksForDifficulty(totalMarks, difficulty);
      
      const selectedQuestions = this.getRandomQuestions(difficultyQuestions, difficultyMarks);
      questionPaper.push(...selectedQuestions);
    }

    return questionPaper;
  }

  getRandomQuestions(questions, marks) {
  const selectedQuestions = [];
  let currentMarks = 0;

  while (currentMarks < marks && questions.length > 0) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions.splice(randomIndex, 1)[0];

    if (randomQuestion) {
      selectedQuestions.push(randomQuestion);
      currentMarks += randomQuestion.marks;
    }
  }

  return selectedQuestions;
}

}

module.exports = QuestionPaperService;
