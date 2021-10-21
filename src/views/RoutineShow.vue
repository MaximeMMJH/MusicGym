<template>
  <v-container>
    <h1>{{ routine.title }}</h1>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    id: String,
  },
  created() {
    this.fetchRoutine(this.id);
  },
  computed: {
    ...mapState({
      routine: (state) => state.routine.routine,
    }),
  },
  methods: {
    ...mapActions("routine", ["fetchRoutine"]),
  },
};
</script>
