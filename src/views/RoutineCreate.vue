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
            <ChosenExerciseCard
              v-for="exercise in this.selectedExercises"
              :key="exercise.id"
              :exercise="exercise"
            />
          </v-col>
        </v-row>

        <v-row justify="center">
          <choose-exercise-dialog @selectedExercise="addSelectedExercise" />
        </v-row>

        <v-row>
          <v-col> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChooseExerciseDialog from "../components/ChooseExerciseDialog.vue";
import ChosenExerciseCard from "@/components/ChosenExerciseCard.vue";

export default {
  data() {
    return {
      selectedExercises: [],
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
    addSelectedExercise(value) {
      this.selectedExercises.push(value);
    },
  },
  components: {
    ChooseExerciseDialog,
    ChosenExerciseCard,
  },
};
</script>
