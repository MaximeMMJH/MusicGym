<template>
  <v-container>
    <v-card
      :to="{ name: 'routine-show', params: { id: routine.id } }"
      elevation="2"
    >
      <v-card-title>
        {{ routine.title }}
      </v-card-title>

      <v-card-subtitle class="text-left">
        Completed {{ routine.timesCompleted }} times
      </v-card-subtitle>

      <v-card-text class="text-left">{{ routine.description }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    routine: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
