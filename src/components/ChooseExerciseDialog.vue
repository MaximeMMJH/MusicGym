<template>
  <v-dialog v-model="dialog" max-width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-card v-on="on" v-bind="attrs" class="rounded-circle" width="100">
        <v-icon size="100">mdi-plus-circle</v-icon>
      </v-card>
    </template>

    <v-card>
      <v-card-title>
        Select Exercises
      </v-card-title>

      <v-card-text>
        <h4>
          Your exercises
        </h4>
        <ChooseExerciseCard
          v-for="exercise in exercise.userExercises"
          :key="exercise.id"
          :exercise="exercise"
          @selectedExercise="selectedExercise"
        />
      </v-card-text>

      <v-card-text>
        <h4>
          Liked exercises
        </h4>
        <ChooseExerciseCard
          v-for="exercise in exercise.publicExercises"
          :key="exercise.id"
          :exercise="exercise"
          @selectedExercise="selectedExercise"
        />
      </v-card-text>

      <v-card-actions>
        <v-btn text @click="chooseExercise">
          choose
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false">
          cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ChooseExerciseCard from "@/components/ChooseExerciseCard.vue";
//import ChosenExerciseCard from "@/components/ChosenExerciseCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      selected: Object,
      dialog: false,
    };
  },
  watch: {
    dialog(visible) {
      if (visible) {
        this.fetchUserExercises("", 1);
        this.fetchPublicExercises(1);
      }
    },
  },
  computed: {
    ...mapState(["exercise"]),
  },
  methods: {
    ...mapActions("exercise", ["fetchUserExercises", "fetchPublicExercises"]),
    chooseExercise() {
      this.dialog = false;
      this.$emit("selectedExercise", this.selected);
    },
    selectedExercise(value) {
      this.selected = value;
    },
  },
  components: {
    ChooseExerciseCard,
    //ChosenExerciseCard,
  },
};
</script>
