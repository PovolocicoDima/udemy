<!-- eslint-disable max-len -->
<template>
  <div>

  </div>
</template>

<script>

export default {
  name: 'cardItem',
  computed: {

  },
  methods: {

  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">

.bha-shop-services-card {
    box-sizing: border-box;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid black;

    @media (min-width: 360px) and ( max-width: 1023px) {
      grid-row: unset;
      grid-column: unset;
    }

    &__bitrix {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        min-height: 278px;
        position: relative;
        & header, & section, & footer {
          margin-left: 150px;
        }
    }
    &__yandex {

    }
    &__mail {

    }
    &__seo {
        grid-row-start: 2;
        grid-row-end: 4;
    }
    &__redirect {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 2;
        grid-column-end: 4;
    }
    &__legal {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 4;
        grid-column-end: 5;
    }
    &__cert {
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 4;
        grid-column-end: 5;

        & p {
          font-size: 20px;
        }
    }

    &_indent {
        &_s {
            padding: 24px;
        }
        &_m {
            padding: 36px;
        }
        &_l {
            padding: 48px;
        }
        &_xl {
            padding: 60px;
        }
    }

    &_theme {
        &_info {
            border: 1px solid black;
        }

        &_interactive {
            transition: all 0.15s ease-out;
            transform: translateY( 0 );

            &:hover {
                transform: translateY( -2px );
                cursor: pointer;
            }

            &:link:active {
                transition-duration: 0.1s;
                transform: translateY( 0 );
            }
        }
    }

    &:link,
    &:visited,
    &:active {
        color: inherit;
        text-decoration: none;
    }

    &__header {
        margin-bottom: 16px;

    }

    &__icon {
        width: 48px;
        height: 48px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 24px;

        &_type {
            &_bitrix {
                background-image: url('../assets/acc-shop-service-bitrix.svg');
                width: 312px;
                height: 278px;
                position: absolute;
                left: 0px;
                top: 0px;
                z-index: -1;
            }

        }
    }

    &__title {
      background: green;
        display: block;
        margin: 0;
    }

    &__content {
      background-color: blue;
        margin-top: 0;
        margin-bottom: 0;
    }

    &__tag {
        background: red;
        margin-top: 16px;
    }

    &__button-wrapper {
        margin-top: 16px;
        & button {
          cursor: pointer;
        }
    }

    @media (min-width: 360px) and ( max-width: 1023px) {
      &__wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(7, 1fr);
        grid-auto-rows: 1fr;
        grid-auto-columns: 1fr;
        gap: 12px;
      }
    }
}

</style>
