<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="previousPage" v-if="hasPreviousPage()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h3>{{ currentPage }}/{{ totalPages }}</h3>
      </v-col>
      <v-col>
        <v-btn @click="nextPage" v-if="hasNextPage()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["totalPages"],
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    nextPage() {
      if (this.hasNextPage()) {
        this.currentPage++;
        this.$emit("switch-page", this.currentPage);
      }
    },
    previousPage() {
      if (this.hasPreviousPage()) {
        this.currentPage--;
        this.$emit("switch-page", this.currentPage);
      }
    },
    hasNextPage() {
      return this.currentPage < this.totalPages;
    },
    hasPreviousPage() {
      return this.currentPage > 1;
    },
  },
};
</script>
