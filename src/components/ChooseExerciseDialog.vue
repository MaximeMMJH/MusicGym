<template>
  <v-dialog v-model="dialog" max-width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-card v-on="on" v-bind="attrs" class="rounded-circle" width="100">
        <v-icon size="100">mdi-plus-circle</v-icon>
      </v-card>
    </template>

    <v-card>
      <v-card-title>
        Select Exercises
      </v-card-title>

      <v-card-text>
        <h4>
          Your exercises
        </h4>
        <ChooseExerciseCard
          v-for="exercise in exercise.userExercises"
          :key="exercise.id"
          :exercise="exercise"
          @selectedExercise="selectedExercise"
        />
      </v-card-text>
      <v-card-actions>
        <PageNavigator
          @switch-page="switchUserPage"
          v-if="userExercisesPageResponse"
          :totalPages="this.userExercisesPageResponse.totalPages"
        />
      </v-card-actions>

      <v-card-text>
        <h4>
          Liked exercises
        </h4>
        <ChooseExerciseCard
          v-for="exercise in exercise.likedExercises"
          :key="exercise.id"
          :exercise="exercise"
          @selectedExercise="selectedExercise"
        />
      </v-card-text>
      <v-card-actions>
        <PageNavigator
          @switch-page="switchLikedPage"
          v-if="likedExercisesPageResponse"
          :totalPages="this.likedExercisesPageResponse.totalPages"
        />
      </v-card-actions>

      <v-card-actions>
        <v-btn text @click="chooseExercise">
          choose
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false">
          cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ChooseExerciseCard from "@/components/ChooseExerciseCard.vue";
//import ChosenExerciseCard from "@/components/ChosenExerciseCard.vue";
import PageNavigator from "@/components/PageNavigator.vue";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      selected: Object,
      dialog: false,
      userExercisesPageResponse: null,
      likedExercisesPageResponse: null,
    };
  },
  watch: {
    dialog(visible) {
      if (visible) {
        this.fetchUserExercises({
          userId: this.$store.state.user.user.id,
          pageNumber: 1,
        }).then((response) => (this.userExercisesPageResponse = response));
        this.fetchLikedExercises({
          userId: this.$store.state.user.user.id,
          pageNumber: 1,
        }).then((response) => (this.likedExercisesPageResponse = response));
      }
    },
  },
  computed: {
    ...mapState(["exercise"]),
  },
  methods: {
    ...mapActions("exercise", ["fetchUserExercises", "fetchLikedExercises"]),
    chooseExercise() {
      this.dialog = false;
      this.$emit("selectedExercise", this.selected);
    },
    selectedExercise(value) {
      this.selected = value;
    },
    switchUserPage(page) {
      this.fetchUserExercises({
        userId: this.$store.state.user.user.id,
        pageNumber: page,
      }).then((response) => (this.userExercisesPageResponse = response));
    },
    switchLikedPage(page) {
      this.fetchLikedExercises({
        userId: this.$store.state.user.user.id,
        pageNumber: page,
      }).then((response) => (this.likedExercisesPageResponse = response));
    },
  },
  components: {
    ChooseExerciseCard,
    PageNavigator,
    //ChosenExerciseCard,
  },
};
</script>
