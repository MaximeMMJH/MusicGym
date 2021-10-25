<template>
  <v-container class="px-0">
    <v-card>
      <v-card-title>
        {{ exercise.title }}
        <v-spacer />
        <v-icon class="text-right">mdi-delete</v-icon>
      </v-card-title>
      <v-card-text class="text-left">{{ exercise.description }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    exercise: Object,
  },
  methods: {
    deleteElement() {},
  },
};
</script>
