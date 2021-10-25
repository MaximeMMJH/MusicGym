<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col>
        <h1>New routine: {{ routine.title }}</h1>
        <v-row justify="center" class="mt-2">
          <v-col cols="10">
            <v-card>
              <v-card-title class="justify-center"> </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="routine.title"
                  outlined
                  label="Title"
                ></v-text-field>
                <v-textarea outlined label="Description"></v-textarea>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="10">
            <ChooseExerciseCard
              v-for="exercise in this.chosenExercises"
              :key="exercise.id"
              :exercise="exercise"
            />
          </v-col>
        </v-row>

        <v-row justify="center">
          <choose-exercise-dialog />
        </v-row>

        <v-row>
          <v-col> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChooseExerciseCard from "@/components/ChooseExerciseCard.vue";
import ChooseExerciseDialog from '../components/ChooseExerciseDialog.vue';

export default {
  data() {
    return {
      chosenExercises: [],
      routine: this.createFreshRoutineObject(),
    };
  },
  methods: {
    createFreshRoutineObject() {
      return {
        title: "",
        description: "",
        timesCompleted: 0,
        userId: "",
        ExerciseIds: [],
      };
    },
    addCard() {
      this.chosenExercises.push({
        id: "77902ecd-4707-43ff-a107-454906b8d814",
        title: "test 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        exerciseType: "IntervalRecognition",
        intervalRecognitionExerciseProperties: {},
        playAlongExerciseProperties: {},
      });
    },
  },
  components: {
    ChooseExerciseCard,
    ChooseExerciseDialog,
  },
};
</script>
