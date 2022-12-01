<template>
  <b-container>
    <h3 class="list-title">{{ listTitle }}</h3>
    <b-row>
      <template v-if="isExist">
        <b-col cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
            @showModal="onShowMovieInfo"
          />
        </b-col>
      </template>
      <template v-else>
        <div>Empty List</div>
      </template>
    </b-row>
    <b-modal
      body-class="movie-modal-body"
      :id="movieInfoModalId"
      size="xl"
      hide-footer
      hide-header
    >
      <MovieInfoModalContent
        :movie="selectedMovie"
        @closeModal="onCloseModal"
      />
    </b-modal>
  </b-container>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import MovieInfoModalContent from "./MovieInfoModalContent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MoviesList",
  components: {
    MovieItem,
    MovieInfoModalContent,
  },
  data: () => ({
    movieInfoModalId: "movie-info",
    selectedMovieId: "",
  }),
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("movies", ["isSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
    selectedMovie() {
      return this.selectedMovieId ? this.list[this.selectedMovieId] : null;
    },
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    ...mapActions(["showNotify"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure you want to delete this movie: ${title} ?`
      );
      if (isConfirmed) {
        this.removeMovie(id);
        this.showNotify({
          msg: "Movie deleted successful",
          variant: "success",
          title: "success",
        });
      }
    },
    onShowMovieInfo(id) {
      console.log(id);
      this.selectedMovieId = id;
      this.$bvModal.show(this.movieInfoModalId);
    },
    onCloseModal() {
      this.$bvModal.hide(this.movieInfoModalId);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
.movie-modal .movie-modal-body {
  padding: 0;
}
</style>

<style>
.movie-modal-body {
  padding: 0 !important;
}
</style>
