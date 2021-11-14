<template>
  <v-container>
    <v-textarea
      v-model="noteExerciseProperties.content"
      outlined
      label="Note to self :)"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      noteExerciseProperties: {
        content: "",
      },
    };
  },
};
</script>

<style></style>
