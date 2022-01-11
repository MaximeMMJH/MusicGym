<template>
  <v-container mt-8>
    <h1>Your routines</h1>
    <RoutineCard
      v-for="routine in routine.items"
      :key="routine.id"
      :routine="routine"
    />
    <PageNavigator
      v-if="pageResponse"
      :totalPages="this.pageResponse.totalPages"
      @switch-page="switchPage"
    />
  </v-container>
</template>

<script>
import RoutineCard from "@/components/RoutineCard.vue";
import PageNavigator from "@/components/PageNavigator.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { RoutineCard, PageNavigator },
  data() {
    return {
      pageResponse: null,
    };
  },
  created() {
    //console.log(process.env.VUE_APP_TEST);
    this.fetchUserRoutines({
      userId: this.$store.state.auth.currentUser.id,
      pageNumber: 1,
    }).then((response) => {
      this.pageResponse = response;
    });
  },
  computed: {
    ...mapState(["routine"]),
  },
  methods: {
    ...mapActions("routine", ["fetchUserRoutines"]),
    switchPage(pageNumber) {
      this.fetchUserRoutines({
        userId: this.$store.state.user.user.id,
        pageNumber: pageNumber,
      }).then((response) => {
        this.pageResponse = response;
      });
    },
  },
};
</script>
