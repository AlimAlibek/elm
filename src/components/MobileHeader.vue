<template>
 <v-container>
    <v-app-bar
      app
      clipped-left
      shrink-on-scroll
      min-height="65"
    >
      <v-app-bar-nav-icon
        x-large
        color="#1FAFAA"
        @click.stop="navigation = !navigation"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-app-bar-title class="pa-0">
        <div class="mobile-location"  >
          <TheLocation />
        </div>
        <div class="main-logo">
          <v-img
            :src="require('../assets/Fisolini_Logo.svg')"
            contain
          />
        </div>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
        icon
        x-large
        color="#1FAFAA"
        @click.stop="signin = !signin"
      >
        <v-icon
          x-large
        >mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="navigation"
      clipped
      fixed
      app
      width="290"
    >
      <v-row
        class="pa-5"
      >
        <v-btn
          icon
          large
          @click="navigation = false"
        >
          <v-icon large>mdi-arrow-left</v-icon>
        </v-btn>
      </v-row>

      <v-row
        class="pr-5 pl-5"
      >
        <TheNavigation
          :tabs="pages"
          mobile
        />
      </v-row>
      <template v-slot:append>
        <v-row
          class="pl-7 pr-5 pb-10"
        >
        <FeedbackInfo
          mobile
        />
        </v-row>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="signin"
      clipped
      fixed
      app
      width="290"
      right
    >
      <v-row
        class="pa-5"
        justify="end"
      >
        <v-btn
          icon
          large
          @click="signin = false"
        >
          <v-icon large>mdi-arrow-right</v-icon>
        </v-btn>
      </v-row>
    </v-navigation-drawer>
 </v-container>
</template>

<script>
  import TheLocation from '@/components/TheLocation.vue';
  import TheNavigation from '@/components/TheNavigation.vue';
  import FeedbackInfo from '@/components/FeedbackInfo.vue';

  export default {
    components: {
      TheLocation,
      TheNavigation,
      FeedbackInfo
    },
    data: () => ({
      navigation: false,
      signin: false,
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
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
  .main-logo {
    width: 100%;
    max-width: 160px;
    height: 60px;
    padding-top: 10px;
  }
  .mobile-location {
    width: 100%;
    margin: 20px auto;
  }
</style>
