<template>
  <v-container>
    <h1>{{ routine.title }}</h1>
    <v-card class="my-5">
      <div v-if="this.exercise.exerciseType === 0">
        <FollowIntervalExercise ref="exerciseComponent" />
      </div>
    </v-card>

    <v-row v-if="this.routine.exerciseIds">
      <!-- <v-col>
        <v-btn text @click="previous" elevation="2">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-col> -->
      <v-col class="text-right">
        <h3>
          exercise {{ exerciseIndex + 1 }}/{{ this.routine.exerciseIds.length }}
        </h3>
      </v-col>
      <v-col class="text-left">
        <v-btn
          text
          @click="next"
          elevation="2"
          v-if="exerciseIndex < this.routine.exerciseIds.length - 1"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn text @click="completeRoutine" elevation="2" v-else>
          Complete
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FollowIntervalExercise from "@/components/FollowIntervalExercise.vue";

import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      exerciseIndex: 0,
    };
  },
  props: {
    id: String,
  },
  created() {
    this.fetchRoutine(this.id).then((response) => {
      this.fetchExercise(response.exerciseIds[this.exerciseIndex]).then(() => {
        this.$refs.exerciseComponent.init();
      });
    });
  },
  computed: {
    ...mapState({
      routine: (state) => state.routine.routine,
      exercise: (state) => state.exercise.exercise,
    }),
  },
  components: {
    FollowIntervalExercise,
  },
  methods: {
    ...mapActions("routine", ["fetchRoutine", "countRoutineCompletion"]),
    ...mapActions("exercise", ["fetchExercise"]),
    next() {
      if (this.exerciseIndex < this.routine.exerciseIds.length - 1) {
        this.exerciseIndex++;
        this.fetchExercise(this.routine.exerciseIds[this.exerciseIndex]).then(
          () => {
            this.$refs.exerciseComponent.init();
          }
        );
      }
    },
    previous() {
      if (this.exerciseIndex > 0) {
        this.exerciseIndex--;
        this.fetchExercise(this.routine.exerciseIds[this.exerciseIndex]).then(
          () => {
            this.$refs.exerciseComponent.init();
          }
        );
      }
    },
    completeRoutine() {
      this.countRoutineCompletion(this.id).then(() => {
        this.$router.push({
          name: "home",
        });
      });
    },
  },
};
</script>
