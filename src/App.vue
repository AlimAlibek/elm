<template>
  <v-app>
      <TheHeader />

    <v-main>

    </v-main>

    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader';
// import FeedbackInfo from '@/components/FeedbackInfo';


export default {
  name: 'App',

  components: {
    TheHeader,
    // FeedbackInfo
  },

data() {
          return {
            currentPage: {},
            pages: [
                {
                    name: 'Каталог',
                    path: '/Catalog'
                },
                {
                    name: 'О компании',
                    path: '/about'
                },
                {
                    name: 'Доставка и оплата',
                    path: '/payment'
                },
                {
                    name: 'Отзывы',
                    path: '/reviews'
                },
            ]
          }
        }
};
</script>


<style scoped>
  .nav-tabs {
    display: flex;
  }
  .nav-tab {
    display: inline-block;
    margin-right: 20px;
    box-sizing: border-box;
    transition: all 0.7s;
  }
  .nav-tab:hover {
    border-bottom: 1px solid #1FAFAA;
    transition: all 1s;
  }

  .tab-title {
    text-transform: none;
    font-weight: 400;
    font-size: 16px;
    margin: -8px;
  }
</style>
