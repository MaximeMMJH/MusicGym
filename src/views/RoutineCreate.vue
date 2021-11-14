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
            <v-btn @click="submit" class="mt-5">
              {{ editable ? "update routine" : "create routine" }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChooseExerciseDialog from "../components/ChooseExerciseDialog.vue";
import ChosenExerciseCard from "@/components/ChosenExerciseCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      selectedExercises: [],
      routine: this.createFreshRoutineObject(),
      editable: !!this.id,
    };
  },
  created() {
    if (this.editable) {
      this.fetchRoutine(this.id).then((response) => {
        this.routine = response;
        this.fetchExercises(this.routine.exerciseIds);
      });
    }
  },
  methods: {
    ...mapActions("routine", [
      "fetchRoutine",
      "createRoutine",
      "updateRoutine",
    ]),
    ...mapActions("exercise", ["fetchExercise"]),
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
    fetchExercises(exerciseIds) {
      for (var id of exerciseIds) {
        this.fetchExercise(id).then((response) => {
          this.selectedExercises.push(response);
        });
      }
    },
    submit() {
      if (this.editable) {
        this.updateRoutine({ routine: this.routine, id: this.id }).then(
          (response) => {
            this.$router.push({
              name: "routine-show",
              params: { id: response.id },
            });
          }
        );
      } else {
        this.createRoutine(this.routine).then((response) => {
          this.$router.push({
            name: "routine-show",
            params: { id: response.id },
          });
        });
      }
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
