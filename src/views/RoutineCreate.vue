<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col>
        <h1>New routine</h1>
        <v-row justify="center">
          <v-col cols="10">
            <v-card>
              <v-card-title class="justify-center"> </v-card-title>
              <v-card-text>
                <v-text-field label="Title"></v-text-field>
                <v-textarea label="Description"></v-textarea>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="10">
            <ChooseExerciseCard
              v-for="exercise in this.chosenExercises"
              :key="exercise"
            />
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-card v-on:click="addCard" class="rounded-circle" width="100">
            <v-icon size="100">mdi-plus-circle</v-icon>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChooseExerciseCard from "@/components/ChooseExerciseCard.vue";

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
      this.chosenExercises.push(this.routine.title);
    },
  },
  components: {
    ChooseExerciseCard,
  },
};
</script>

<style></style>
