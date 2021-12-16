<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="11" class="mt-5">
        <h1>{{ this.exercise.exercise.title }}</h1>
        <h3>Question {{ this.questionNumber }}</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="hearSound()">Hear audio</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-if="this.exercise.exercise.intervalRecognitionExerciseProperties"
      >
        <v-btn
          width="120"
          class="ma-2"
          @click="submitAnswer(interval)"
          :key="interval"
          v-for="interval in this.exercise.exercise
            .intervalRecognitionExerciseProperties.intervals"
        >
          {{ getIntervalName(interval) }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          :disabled="!this.question.isAnswered"
          class="mb-3"
          @click="nextQuestion()"
          >Next</v-btn
        >
        <h3 v-if="this.exerciseResult !== null">
          {{ this.exerciseResult ? "Correct" : "Incorrect" }}
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IntervalCalculator from "@/services/logic/IntervalCalculator.js";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      exerciseResult: null,
      question: Object,
      playPromise: null,
      intervals: [],
      questionNumber: 1,
    };
  },
  computed: {
    ...mapState(["exercise"]),
  },
  methods: {
    ...mapActions("exercise", ["fetchExercise"]),
    async hearSound() {
      this.playAudio(this.question.firstNoteFileName);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.playAudio(this.question.secondNoteFileName);
    },
    init() {
      this.intervals = this.exercise.exercise.intervalRecognitionExerciseProperties.intervals;
      this.generateQuestion();
    },
    playAudio(filename) {
      var sound = require("@/assets/pianoNotes/" + filename);
      var audio = new Audio(sound);
      audio.play();
    },
    generateQuestion() {
      this.question = IntervalCalculator.generateQuestion(this.intervals);
    },
    submitAnswer(interval) {
      if (!this.question.isAnswered) {
        this.question.isAnswered = true;
        this.question.submittedAnswer = interval;
        this.exerciseResult = this.isAnswerCorrect();
      }
    },
    nextQuestion() {
      this.questionNumber++;
      this.clearData();
      this.generateQuestion();
    },
    clearData() {
      this.exerciseResult = null;
    },
    isAnswerCorrect() {
      return this.question.submittedAnswer === this.question.correctAnswer;
    },
    getIntervalName(interval) {
      return IntervalCalculator.getIntervalName(interval);
    },
  },
};
</script>

<style></style>
