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


      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    dialog(visible) {
      if (visible) {
        this.fetchUserExercises("", 1);
        this.fetchPublicExercises(1);
      }
    },
  },
  computed: {
    ...mapState(["exercise"]),
  },
  methods: {
    ...mapActions("exercise", ["fetchUserExercises", "fetchPublicExercises"]),
  },
};
</script>
