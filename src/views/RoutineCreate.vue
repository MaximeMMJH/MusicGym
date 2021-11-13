<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col>
        <h1>New routine</h1>
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
                <v-textarea
                  v-model="routine.description"
                  outlined
                  label="Description"
                ></v-textarea>
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
              @removeExercise="removeExercise"
            />
          </v-col>
        </v-row>

        <v-row justify="center">
          <choose-exercise-dialog @selectedExercise="addSelectedExercise" />
        </v-row>

        <v-row>
          <v-col>
            <v-btn @click="createRoutine" class="mt-5">Create routine</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChooseExerciseDialog from "../components/ChooseExerciseDialog.vue";
import ChosenExerciseCard from "@/components/ChosenExerciseCard.vue";
import { mapState } from "vuex";

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
        userId: this.$store.state.user.user.id,
        exerciseIds: [],
      };
    },
    addSelectedExercise(value) {
      this.selectedExercises.push(value);
      this.routine.exerciseIds.push(value.id);
    },
    removeExercise(value) {
      this.$delete(
        this.selectedExercises,
        this.selectedExercises.indexOf(value)
      );
      this.$delete(
        this.routine.exerciseIds,
        this.routine.exerciseIds.indexOf(value.id)
      );
    },
    createRoutine() {
      this.$store
        .dispatch("routine/createRoutine", this.routine)
        .then((response) => {
          this.$router.push({
            name: "routine-show",
            params: { id: response.id },
          });
        })
        .catch((error) => {
          console.log(error);
        });
      this.routine = this.createFreshRoutineObject();
    },
  },
  components: {
    ChooseExerciseDialog,
    ChosenExerciseCard,
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>
