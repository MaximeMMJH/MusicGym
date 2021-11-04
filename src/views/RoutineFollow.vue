<template>
  <v-container>
    <h1>{{ routine.title }}</h1>
    <v-btn text @click="previous">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <v-card class="my-5">
      <v-window vertical>
        <v-window-item v-for="id in routine.exerciseIds" :key="id">
          <v-card>
            {{ id }}
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
    <v-btn text @click="next">
      <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      onboarding: 0,
    };
  },
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
    next() {
      if (this.onboarding < this.routine.exerciseIds.length) {
        this.onboarding += 1;
      }
      console.log(this.onboarding);
    },
    previous() {
      if (this.onboarding > 0) {
        this.onboarding -= 1;
      }
      console.log(this.onboarding);
    },
  },
};
</script>
