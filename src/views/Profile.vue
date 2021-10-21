<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1>Profile</h1>
        <v-card elevation="2">
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <v-avatar class="outlined" size="128">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  >
                  </v-img>
                </v-avatar>
                <h1>{{ user.user.username }}</h1>
                <h4>{{ user.user.email }}</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-btn @click="dialog = true" class="float-right">
                  <v-icon>
                    mdi-delete
                  </v-icon>
                  <v-dialog v-model="dialog" max-width="300px">
                    <v-card>
                      <v-col cols="12">
                        <h3>are you sure?</h3>
                      </v-col>
                      <v-card-actions>
                        <v-col cols="6">
                          <v-btn color="primary" flat @click="dialog = false"
                            >Close</v-btn
                          >
                        </v-col>
                        <v-col cols="6">
                          <v-btn
                            color="#ed4c40"
                            class="white--text"
                            flat
                            @click="dialog = false"
                            >Confirm</v-btn
                          >
                        </v-col>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-btn>
              </v-col>
              <v-col>
                <router-link :to="{ name: 'profileEdit' }">
                  <v-btn class="float-left">
                    <v-icon>
                      mdi-account-edit
                    </v-icon>
                  </v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1>Routines</h1>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1>Your exercises</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserService from "@/services/UserService.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {},
  methods: {
    delete() {
      UserService.delete(this.user.id);
    },
  },
  computed: mapState(["user"]),
};
</script>

<style></style>
