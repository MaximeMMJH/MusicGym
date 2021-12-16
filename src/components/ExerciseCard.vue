<template>
  <v-container>
    <div v-if="this.exerciseBelongsToCurrentUser()">
      <v-row>
        <v-col cols="10">
          <v-card min-height="108">
            <v-card-title class="pt-3">
              {{ exercise.title }}
            </v-card-title>
            <v-card-text class="text-left">{{
              exercise.description
            }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2" class="pl-0">
          <v-row>
            <v-col class="pb-0">
              <v-card>
                <v-icon class="text-right py-3" @click="editExercise">
                  mdi-pencil
                </v-icon>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pb-0">
              <v-card>
                <v-icon class="text-right py-3" @click="deleteExercise">
                  mdi-delete
                </v-icon>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-card>
        <v-row>
          <v-col cols="9">
            <v-card-title class="pt-0">
              {{ exercise.title }}
            </v-card-title>
            <v-card-text class="text-left">{{
              exercise.description
            }}</v-card-text>
          </v-col>
          <v-col class="text-right" cols="3">
            <v-icon
              @click="unlike"
              v-if="this.exercise.isLiked"
              size="40"
              class="pr-3"
            >
              mdi-heart
            </v-icon>
            <v-icon @click="like" v-else size="40" class="pr-3"
              >mdi-heart-outline</v-icon
            >
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("exercise", [
      "removeExercise",
      "likeExercise",
      "unlikeExercise",
    ]),
    exerciseBelongsToCurrentUser() {
      return this.exercise.userId === this.$store.state.user.user.id;
    },
    editExercise() {
      this.$router.push({
        name: "exercise-create",
        params: { id: this.exercise.id },
      });
    },
    deleteExercise() {
      this.removeExercise(this.exercise);
    },
    like() {
      this.likeExercise({
        exerciseId: this.exercise.id,
        userId: this.$store.state.user.user.id,
      });
    },
    unlike() {
      this.unlikeExercise({
        exerciseId: this.exercise.id,
        userId: this.$store.state.user.user.id,
      });
    },
  },
};
</script>
