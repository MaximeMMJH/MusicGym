<template>
  <v-container mt-8>
    <h1>Your routines</h1>
    <RoutineCard
      v-for="routine in routine.items"
      :key="routine.id"
      :routine="routine"
    />
  </v-container>
</template>

<script>
import RoutineCard from "@/components/RoutineCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { RoutineCard },
  created() {
    this.fetchUserRoutines(this.$store.state.user.user.id);
  },
  computed: {
    ...mapState(["routine"]),
  },
  methods: {
    ...mapActions("routine", ["fetchUserRoutines"]),
  },
};
</script>
