<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ exercise.title }}
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
};
</script>
