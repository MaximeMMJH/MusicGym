<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col>
        <h1>{{ this.routine.title }}</h1>
        <v-card class="pt-3 pb-7">
          <h3>Start routine</h3>
          <v-row justify="center">
            <v-card
              :to="{ name: 'routine-follow', params: { id: routine.id } }"
              class="rounded-circle mt-5"
              width="100"
            >
              <v-icon size="100">mdi-play-circle</v-icon>
            </v-card>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
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
