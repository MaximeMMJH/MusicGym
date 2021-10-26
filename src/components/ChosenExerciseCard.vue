<template>
  <v-container class="px-0">
    <v-card>
      <v-card-title>
        {{ exercise.title }}
        <v-spacer />
        <v-icon class="text-right" @click="removeExercise">mdi-delete</v-icon>
      </v-card-title>
      <v-card-text class="text-left">{{ exercise.description }}</v-card-text>
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
    removeExercise() {
      this.$emit("removeExercise", this.exercise);
    },
  },
};
</script>
