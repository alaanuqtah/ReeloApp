class DistributionCalc {
  constructor(distribution) {
    this.distribution = distribution;
  }

  calculateMarksForDifficulty(totalMarks, difficulty) {
    return Math.floor((this.distribution[difficulty] / 100) * totalMarks);
  }
}

module.exports = DistributionCalc;
