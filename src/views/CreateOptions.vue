<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col>
        <h1 class="mb-2">New routine</h1>
        <v-row justify="center" class="mb-16">
          <v-col cols="8">
            <v-card :to="{ name: 'routine-create' }" elevation="2" class="py-4">
              <v-icon size="100">mdi-plus-circle</v-icon>
            </v-card>
          </v-col>
        </v-row>

        <h1 class="mb-2">New exercise</h1>
        <v-row justify="center">
          <v-col cols="8">
            <v-card
              :to="{ name: 'exercise-create' }"
              elevation="2"
              class="py-4"
            >
              <v-icon size="100">mdi-plus-circle</v-icon>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
