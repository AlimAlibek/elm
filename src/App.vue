<template>
  <v-app>
    <TheHeader />

    <main>
      <div style="
        height: 2000px
      "></div>
    </main>

    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  name: 'App',

  components: {
    TheHeader,
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
            ],

            // windowWidth: document.body.clientWidth
          }
        },

        computed: {
          screenWidth() {
            console.log(this.$vuetify.breakpoint)
            // return (this.$vuetify.breakpoint.width > 1263)
            //   ? 'large'
            //   : (this.$vuetify.breakpoint.width < 1264 && this.$vuetify.breakpoint.width > 820)
            //   ? 'middle' : 'small'

            return (
              this.$vuetify.breakpoint.sm ? 'small'
              : this.$vuetify.breakpoint.md ? 'middle'
              : this.$vuetify.breakpoint.lg ? 'large'
              : this.$vuetify.breakpoint.xl ? 'x-large' : 'xs'
            )
          },
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
