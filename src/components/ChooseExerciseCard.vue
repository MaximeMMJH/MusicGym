<template>
  <v-container class="px-0">
    <v-card @click="chooseExercise">
      <v-card-title class="justify-center">
        {{ exercise.title }}
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },
  methods: {
    chooseExercise() {
      this.$emit("selectedExercise", this.exercise);
    },
  },
};
</script>
