<template>
  <section class="container">
    <Header />
    <nuxt-link to="/users">Users1</nuxt-link>
  </section>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  components: {
    Header,
  },
  name: 'IndexPage'
}
</script>
