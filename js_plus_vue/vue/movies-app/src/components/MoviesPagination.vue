<template>
  <div class="movies-pagination">
    <b-pagination
      v-model="currentPageModel"
      :movies-per-page="moviesPerPage"
      :total-rows="totalPages"
      prev-text="Prev"
      next-text="Next"
    />
  </div>
</template>

<script>
export default {
  name: "MoviesPagination",
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        return this.$emit("pageChanged", value);
      },
    },
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    moviesPerPage: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped>
.movies-pagination {
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.movies-pagination >>> .pagination .page-item .page-link {
  background-color: transparent;
  font-size: 14px;
  color: #fff;
  box-shadow: none;
}

.movies-pagination >>> .pagination .page-item.active .page-link {
  background-color: #fff;
  background-color: #fff;
  color: #000;
}

.movies-pagination >>> .pagination .page-item.disabled .page-link {
  color: lightgray;
}
</style>
