<template>
  <div id="app">
    <h3>Заголовок</h3>
    <p>Подзаголовок</p>
    <main class="bha-shop-services__content">
    <div class="bha-shop-services__wrapper">
        <cardItem
            v-for="(card, index) in cardOptions"
            :key="index"
            :title="card.title"
            :content="card.content"
            :icon="card.icon"
            :tag="card.tag"
            :tag-content="card.tagContent"
            :button-text="card.buttonText"
            :button="card.button"
            :indent="card.indent"
            :theme="card.theme"
            :attrs="card.attrs"
        >

        </cardItem>
    </div>
</main>
  </div>
</template>

<script>
import cardItem from './components/cardItem.vue';

export default {
  name: 'App',
  components: {
    cardItem,
  },
  data: () => ({
    cardOptions: ['yandex', 'mail', 'seo', 'redirect', 'legal', 'cert'],
  }),
  computed: {
  },
};
</script>

<style lang="scss">
    #app {
      margin: 50px;
    }
    .bha-shop-services {

        &____heading-wrapper {
            margin-left: 20px;
        }

        &__title {

          font-size: 18px;
          margin-bottom: 16px;
          color: blue;
        }

        &__subtitle {
          margin-bottom: 48px;
          color: gray;
        }

        &__wrapper {
          display: grid;
          grid-template-columns: 2fr 114px 1fr 1fr;
          grid-template-rows: 2fr 1fr 1fr;
          gap: 12px;
        }

        @media (min-width: 360px) and ( max-width: 1023px) {
          &__wrapper {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: repeat (7, 1fr );
          }
        }
    }
</style>
