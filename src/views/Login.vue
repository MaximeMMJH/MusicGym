<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 text--accent-3"
                        style="color:#f56038;"
                      >
                        Sign in
                      </h1>
                      <v-form>
                        <v-text-field
                          label="Email"
                          name="Email"
                          prepend-icon="email"
                          type="text"
                          color="#f56038"
                        />
                        <v-text-field
                          id="password"
                          label="Password"
                          name="password"
                          prepend-icon="lock"
                          type="password"
                          color="#f56038"
                        />
                      </v-form>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn rounded color="#f56038" dark>SIGN IN</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" style="background-color:#f56038;">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Welcome Back!</h1>
                      <h5 class="text-center">
                        Enter your personal details to continue training
                      </h5>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn rounded outlined dark @click="step++"
                        >SIGN UP</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col
                    cols="12"
                    md="4"
                    style="background-color:#f56038;"
                    class="accent-3"
                  >
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Welcome!</h1>
                      <h5 class="text-center">
                        Create an account to start buiding your musical routine
                      </h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step--"
                        >Sign in</v-btn
                      >
                    </div>
                  </v-col>

                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 text--accent-3"
                        style="color:#f56038;"
                      >
                        Create Account
                      </h1>
                      <v-form>
                        <v-text-field
                          label="Name"
                          name="Name"
                          prepend-icon="person"
                          type="text"
                          color="#f56038"
                          v-model="user.username"
                        />
                        <v-text-field
                          label="Email"
                          name="Email"
                          prepend-icon="email"
                          type="text"
                          color="#f56038"
                          v-model="user.email"
                        />

                        <v-text-field
                          id="password"
                          label="Password"
                          name="password"
                          prepend-icon="lock"
                          type="password"
                          color="#f56038"
                        />
                      </v-form>
                    </v-card-text>
                    <div class="text-center mb-5">
                      <v-btn v-on:click="create" rounded color="#f56038" dark
                        >SIGN UP</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import userService from "@/services/UserService.js";

export default {
  data: () => ({
    step: 1,
    user: { username: "", email: "" },
  }),
  props: {
    source: String,
  },
  methods: {
    create() {
      userService.create(this.user);
    },
  },
};
</script>

<style></style>
