<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <h1>Edit details</h1>
          <v-card class="elevation-2">
            <v-col cols="12">
              <v-text-field
                label="Username"
                v-model="user.username"
              ></v-text-field>
              <v-text-field label="Email" v-model="user.email"></v-text-field>
            </v-col>
            <v-col>
              <v-btn class="primary" v-on:click="update">save changes</v-btn>
            </v-col>
          </v-card>
        </v-col>
        <v-col>
          <v-btn>change password</v-btn>
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
    user: store.state.user,
  }),
  methods: {
    update() {
      UserService.update(this.user);
    }
  }
};
</script>

<style></style>
