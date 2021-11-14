<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="11" class="mt-5">
        <v-text-field v-model="query" outlined label="Search"></v-text-field>
        <ExerciseCard
          v-for="exercise in exercise.publicExercises"
          :key="exercise.id"
          :exercise="exercise"
        />
        <PageNavigator :totalPages="5" @switch-page="switchPage" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ExerciseCard from "@/components/ExerciseCard.vue";
import PageNavigator from "@/components/PageNavigator.vue";

export default {
  created() {
    this.fetchPublicExercises(this.query, 1);
  },
  data() {
    return {
      query: "",
    };
  },
  components: {
    ExerciseCard,
    PageNavigator,
  },
  computed: {
    ...mapState(["exercise"]),
  },
  methods: {
    ...mapActions("exercise", ["fetchPublicExercises"]),
    switchPage(page) {
      console.log(page);
    },
  },
};
</script>
