<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-card
          :to="{ name: 'routine-show', params: { id: routine.id } }"
          elevation="2"
        >
          <v-card-title>
            {{ routine.title }}
          </v-card-title>

          <v-card-subtitle class="text-left">
            Completed {{ routine.timesCompleted }} times
          </v-card-subtitle>

          <v-card-text class="text-left">{{ routine.description }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="2" class="pl-0">
        <v-row>
          <v-col class="pb-0">
            <v-card>
              <v-icon class="text-right py-3" @click="editRoutine">
                mdi-pencil
              </v-icon>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pb-0">
            <v-card>
              <v-icon class="text-right py-3" @click="deleteRoutine">
                mdi-delete
              </v-icon>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    routine: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("routine", ["removeRoutine"]),
    deleteRoutine() {
      this.removeRoutine(this.routine);
    },
    editRoutine() {
      this.$router.push({
        name: "routine-create",
        params: { id: this.routine.id },
      });
    },
  },
};
</script>
