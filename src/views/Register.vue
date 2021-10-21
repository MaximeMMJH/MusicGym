<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <h1>Create account</h1>
          <v-card class="elevation-2">
            <v-col cols="12">
              <v-text-field label="Username" v-model="user.username" />
              <v-text-field label="Email" v-model="user.email" />
              <v-text-field label="Password" type="password" />
            </v-col>
            <v-col>
              <v-btn class="primary" v-on:click="create">register</v-btn>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import UserService from "@/services/UserService.js";
import store from "../store";

export default {
  data: () => ({
    user: { username: "", email: "" },
  }),
  methods: {
    create() {
      console.log(this.user);
      UserService.create(this.user)
        .then((response) => {
          console.print(response.data);
          store.commit("setGlobalUser", response.data);
        })
        .catch((error) => {
          console.log("There was an error:", error);
        });
    },
  },
};
</script>

<style></style>
