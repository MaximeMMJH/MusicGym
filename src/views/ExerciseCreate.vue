<template>
  <v-container>
    <h1>New exercise</h1>
    <v-row justify="center" class="mt-2">
      <v-col cols="11">
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
              item-text="name"
              item-value="id"
              v-model="selectedExerciseType"
              filled
              label="Select type of exercise"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="11">
        <v-card>
          <div v-if="selectedExerciseType === 0">
            <CreateExerciseIntervalProperties ref="intervalComponent" />
          </div>
          <div v-else-if="selectedExerciseType === 1">
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
        <v-btn :disabled="this.selectedExerciseType < 0" @click="submit"
          >Create exercise</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateExerciseIntervalProperties from "@/components/CreateExerciseIntervalProperties.vue";

import { mapActions } from "vuex";
export default {
  data() {
    return {
      exercise: this.createFreshExercise(),
      exerciseTypes: [
        { name: "Interval recognition", id: 0 },
        { name: "Play along", id: 1 },
      ],
      selectedExerciseType: -1,
    };
  },
  methods: {
    ...mapActions("exercise", ["createExercise"]),
    submit() {
      if (this.selectedExerciseType === 0) {
        this.exercise.intervalRecognitionExerciseProperties = this.$refs.intervalComponent.intervalExerciseProperties;
        this.createExercise(this.exercise);
      } else if (this.selectedExerciseType === 1) {
        this.createExercise(this.exercise);
      } else {
        console.log("invalid exercisetype");
      }
    },
    createFreshExercise() {
      return {
        userId: this.$store.state.user.user.id,
        title: "",
        description: "",
        intervalRecognitionExerciseProperties: null,
        playAlongExerciseProperties: null,
        exerciseType: 0,
      };
    },
  },
  components: {
    CreateExerciseIntervalProperties,
  },
};
</script>
