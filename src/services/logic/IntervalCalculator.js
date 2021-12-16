export default {
  availableFileNames: [
    "4-01.mp3",
    "4-02.mp3",
    "4-03.mp3",
    "4-04.mp3",
    "4-05.mp3",
    "4-06.mp3",
    "4-07.mp3",
    "4-08.mp3",
    "4-09.mp3",
    "4-10.mp3",
    "4-11.mp3",
    "4-12.mp3",
    "5-01.mp3",
    "5-02.mp3",
    "5-03.mp3",
    "5-04.mp3",
    "5-05.mp3",
    "5-06.mp3",
    "5-07.mp3",
    "5-08.mp3",
    "5-09.mp3",
    "5-10.mp3",
    "5-11.mp3",
    "5-12.mp3",
    "6-01.mp3",
  ],
  intervalNames: [
    "Unison",
    "Minor 2nd",
    "Major 2nd",
    "Minor 3rd",
    "Major 3rd",
    "Perfect 4th",
    "Tritone",
    "Perfect 5th",
    "Minor 6th",
    "Major 6th",
    "Minor 7th",
    "Major 7th",
    "Octave",
    "Minor 9th",
    "Major 9th",
  ],
  generateQuestion(intervals) {
    var question = {
      firstNoteFileName: "",
      secondNoteFileName: "",
      correctAnswer: 0,
      submittedAnswer: -1,
      isAnswered: false,
    };

    var interval = this.selectRandomInterval(intervals);

    var firstNoteIndex = this.selectFirstNoteIndex(interval);
    var secondNoteIndex = firstNoteIndex + interval;

    question.firstNoteFileName = this.availableFileNames[firstNoteIndex];
    question.secondNoteFileName = this.availableFileNames[secondNoteIndex];

    question.correctAnswer = interval;

    return question;
  },
  selectRandomInterval(intervals) {
    return intervals[Math.floor(Math.random() * intervals.length)];
  },
  selectFirstNoteIndex(interval) {
    return Math.floor(
      Math.random() * (this.availableFileNames.length - interval)
    );
  },
  getIntervalName(interval) {
    return this.intervalNames[interval];
  },
  getAllIntervals() {
    return this.intervalNames;
  },
};
