<template>
  <v-container>
    <h1>{{ editable ? "Edit exercise" : "New exercise" }}</h1>
    <v-row justify="center" class="mt-2">
      <v-col cols="11">
        <v-card>
          <v-card-title class="justify-center"> </v-card-title>
          <v-card-text>
            <v-text-field v-model="exercise.title" outlined label="Title" />
            <v-textarea
              v-model="exercise.description"
              outlined
              label="Description"
            />
            <v-select
              :disabled="editable"
              :items="exerciseTypes"
              item-text="name"
              item-value="id"
              v-model="exercise.exerciseType"
              filled
              label="Select type of exercise"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="11">
        <v-card>
          <div v-if="this.exercise.exerciseType === 0">
            <h2 class="pt-2">Select intervals</h2>
            <v-card-actions>
              <v-btn-toggle
                multiple
                v-model="intervalExerciseProperties.intervals"
              >
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
          </div>
          <div v-else-if="this.exercise.exerciseType === 1">
            <v-textarea
              v-model="noteExerciseProperties.content"
              outlined
              label="Note to self :)"
            />
          </div>
          <div v-else>
            <h3 class="py-6">Select an exercise type</h3>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn :disabled="this.exercise.exerciseType < 0" @click="submit">
          {{ editable ? "Update exercise" : "Create exercise" }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IntervalCalculator from "@/services/logic/IntervalCalculator.js";
import { mapActions } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      exercise: this.createFreshExercise(),
      exerciseTypes: [
        { name: "Interval recognition", id: 0 },
        { name: "Note", id: 1 },
      ],
      editable: !!this.id,
      intervals: this.getAllIntervals(),
      intervalExerciseProperties: this.createFreshIntervalProperties(),
      noteExerciseProperties: this.createFreshNoteProperties(),
    };
  },
  mounted() {
    if (this.editable) {
      this.fetchExercise(this.id).then((response) => {
        this.exercise = response;
        if (response.exerciseType === 0) {
          this.intervalExerciseProperties =
            response.intervalRecognitionExerciseProperties;
        } else if (response.exerciseType === 1) {
          this.noteExerciseProperties = response.noteExerciseProperties;
        }
      });
    }
  },
  methods: {
    getAllIntervals() {
      return IntervalCalculator.getAllIntervals();
    },
    ...mapActions("exercise", [
      "createExercise",
      "fetchExercise",
      "updateExercise",
    ]),
    submit() {
      if (this.exercise.exerciseType === 0) {
        this.exercise.intervalRecognitionExerciseProperties = this.intervalExerciseProperties;
      } else if (this.exercise.exerciseType === 1) {
        this.exercise.noteExerciseProperties = this.noteExerciseProperties;
      } else {
        console.log("invalid exercisetype");
      }

      if (this.editable) {
        this.updateExercise({ id: this.exercise.id, exercise: this.exercise });
      } else {
        this.createExercise(this.exercise);
      }
    },
    createFreshExercise() {
      return {
        userId: this.$store.state.user.user.id,
        title: "",
        description: "",
        amountOfLikes: 0,
        isliked: false,
        intervalRecognitionExerciseProperties: null,
        noteExerciseProperties: null,
        playAlongExerciseProperties: null,
        exerciseType: -1,
      };
    },
    createFreshIntervalProperties() {
      return {
        intervals: [],
        ascentionType: 0,
      };
    },
    createFreshNoteProperties() {
      return {
        content: "",
      };
    },
  },
  components: {},
};
</script>
