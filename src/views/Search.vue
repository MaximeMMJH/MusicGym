<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="11" class="mt-5">
        <v-row>
          <v-col cols="9">
            <v-text-field
              height="60"
              v-model="query"
              outlined
              label="Search"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-btn @click="search" height="60">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <ExerciseCard
          v-for="exercise in exercise.publicExercises"
          :key="exercise.id"
          :exercise="exercise"
        />
        <PageNavigator
          v-if="pageResponse"
          :totalPages="this.pageResponse.totalPages"
          @switch-page="switchPage"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import ExerciseCard from "@/components/ExerciseCard.vue";
import PageNavigator from "@/components/PageNavigator.vue";

export default {
  data() {
    return {
      query: "",
      activeQuery: "",
      pageResponse: null,
    };
  },
  components: {
    ExerciseCard,
    PageNavigator,
  },
  mounted() {
    this.SET_PUBLIC_EXERCISES([]);
  },
  computed: {
    ...mapState(["exercise"]),
  },
  methods: {
    ...mapMutations("exercise", ["SET_PUBLIC_EXERCISES"]),
    ...mapActions("exercise", ["fetchPublicExercises"]),
    switchPage(page) {
      this.fetchPublicExercises({
        q: this.activeQuery,
        pageNumber: page,
        userId: this.$store.state.auth.currentUser.id,
      }).then((response) => {
        this.pageResponse = response;
      });
    },
    search() {
      this.activeQuery = this.query;
      this.fetchPublicExercises({
        q: this.activeQuery,
        pageNumber: 1,
        userId: this.$store.state.user.user.id,
      }).then((response) => {
        this.pageResponse = response;
      });
    },
  },
};
</script>
