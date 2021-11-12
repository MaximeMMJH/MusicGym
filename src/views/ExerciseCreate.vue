<template>
  <v-container>
    <h1>New exercise</h1>
    <v-row justify="center" class="mt-2">
      <v-col cols="10">
        <v-card>
          <v-card-title class="justify-center"> </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="exercise.title"
              outlined
              label="Title"
            ></v-text-field>
            <v-textarea
              v-model="exercise.description"
              outlined
              label="Description"
            ></v-textarea>
            <v-select
              :items="exerciseTypes"
              v-model="selectedExerciseType"
              filled
              label="Select type of exercise"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10">
        <v-card>
          <div v-if="selectedExerciseType === 'Interval recognition'">
            <h2 class="pt-2">Select intervals</h2>
            <v-card-actions>
              <v-btn-toggle multiple v-model="test">
                <v-row>
                  <v-col>
                    <v-btn
                      class="ma-2"
                      v-for="interval in this.intervals"
                      :key="interval"
                      width="120"
                      >{{ interval }}</v-btn
                    >
                  </v-col>
                </v-row>
              </v-btn-toggle>
            </v-card-actions>
          </div>
          <div v-else-if="selectedExerciseType === 'Play along'">
            <template>
              <v-file-input accept="image/*" label="File input"></v-file-input>
            </template>
          </div>
          <div v-else>
            <h3 class="py-6">Select an exercise type</h3>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="submit">Create exercise</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IntervalCalculator from "@/services/logic/IntervalCalculator.js";

import { mapActions } from "vuex";
export default {
  data() {
    return {
      exercise: this.createFreshExercise(),
      exerciseTypes: ["Interval recognition", "Play along"],
      selectedExerciseType: "",
      intervals: this.getAllIntervals(),
      test: [],
    };
  },
  methods: {
    ...mapActions("exercise", ["createExercise"]),
    getAllIntervals() {
      return IntervalCalculator.getAllIntervals();
    },
    submit() {
      this.createExercise(this.exercise);
      // this.$router.push({
      //   name: "exercise-show",
      //   params: { id: "bfwebif" },
      // });
    },
    createFreshExercise() {
      return {
        userId: "2954b23c-7d1d-49c5-8f9b-27686e73b357",
        title: "testIntervalRecognitionExercise",
        description: "testDescription",
        intervalRecognitionExerciseProperties: {
          ascentionType: 2,
          intervals: [],
        },
        playAlongExerciseProperties: null,
        exerciseType: 0,
      };
    },
  },
};
</script>
