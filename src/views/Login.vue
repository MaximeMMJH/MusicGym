<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <h1>Login</h1>
      <v-col cols="10">
        <v-form>
          <v-text-field label="Email" v-model="email" />
          <v-text-field
            v-model="password"
            :append-icon="this.show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="this.show ? 'text' : 'password'"
            label="Password"
            @click:append="show = !show"
            autocomplete="on"
          />
        </v-form>
        <v-btn class="mt-5" @click="requestLogin">Login</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      show: false,
    };
  },
  methods: {
    requestLogin() {
      this.login({
        user: {
          email: this.email,
          password: this.password,
        },
      });
    },
    ...mapActions("auth", ["login"]),
  },
};
</script>

<style></style>
