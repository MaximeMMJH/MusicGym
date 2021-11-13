<template>
  <v-container>
    <h2 class="pt-2">Select intervals</h2>
    <v-card-actions>
      <v-btn-toggle multiple v-model="intervalExerciseProperties.intervals">
        <v-row>
          <v-col>
            <v-btn
              class="ma-2"
              v-for="interval in this.intervals"
              :key="interval"
              width="120"
              >{{ interval }}</v-btn
            >
          </v-col>
        </v-row>
      </v-btn-toggle>
    </v-card-actions>
  </v-container>
</template>

<script>
import IntervalCalculator from "@/services/logic/IntervalCalculator.js";

export default {
  data() {
    return {
      intervals: this.getAllIntervals(),
      intervalExerciseProperties: {
        intervals: [],
        ascentionType: 0,
      },
    };
  },
  methods: {
    getAllIntervals() {
      return IntervalCalculator.getAllIntervals();
    },
  },
};
</script>

<style></style>
