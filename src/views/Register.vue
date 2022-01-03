<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col cols="10">
        <h1>Create account</h1>
        <v-col cols="12">
          <v-form>
            <v-text-field label="Username" v-model="user.Username" />
            <v-text-field label="Email" v-model="user.Email" />
            <v-text-field
              v-model="user.Password"
              :append-icon="this.show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="this.show ? 'text' : 'password'"
              label="Password"
              @click:append="show = !show"
            />
          </v-form>
        </v-col>
        <v-col>
          <v-btn v-on:click="create">register</v-btn>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn to="/login"><v-icon>mdi-chevron-left</v-icon></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: this.createFreshRegisterObj(),
      show: false,
    };
  },
  methods: {
    create() {
      this.register(this.user).then((response) => {
        this.$router.push({
          name: "login",
          params: { registerPass: response },
        });

        this.createFreshRegisterObj();
      });
    },
    ...mapActions("auth", ["register"]),
    createFreshRegisterObj() {
      return { Username: "", Email: "", Password: "" };
    },
  },
};
</script>
