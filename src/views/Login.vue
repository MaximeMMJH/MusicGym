<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <h1>Login</h1>
      <v-col cols="10">
        <v-form>
          <v-text-field label="Username" v-model="user.username" />
          <v-text-field
            v-model="user.password"
            :append-icon="this.show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="this.show ? 'text' : 'password'"
            label="Password"
            @click:append="show = !show"
            autocomplete="on"
          />
        </v-form>
        <v-row class="mt-5">
          <v-col>
            <v-btn @click="requestLogin">Login</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn to="/register"><v-icon>mdi-chevron-right</v-icon></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    registerPass: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      user: this.getFreshUserObj(),
      show: false,
    };
  },
  created() {
    if (this.registerPass != null) {
      this.user.username = this.registerPass.username;
      this.user.password = this.registerPass.password;
    }
  },
  methods: {
    requestLogin() {
      this.login(this.user).then(() => {
        this.$router.push({
          name: "home",
        });
      });
    },
    ...mapActions("auth", ["login"]),
    getFreshUserObj() {
      return { username: "", password: "" };
    },
  },
};
</script>

<style></style>
