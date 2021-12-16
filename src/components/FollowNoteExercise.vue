<template>
  <v-container>
    <h3>Note to self:</h3>
    <p>{{ this.exercise.exercise.noteExerciseProperties.content }}</p>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    init() {},
  },
  computed: {
    ...mapState(["exercise"]),
  },
};
</script>
