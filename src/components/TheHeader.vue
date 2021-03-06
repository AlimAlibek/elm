<template>
<div>

<MobileHeader
  v-if="sMiddleScreen"
/>

<v-card
  v-else
>
  <v-app-bar
    app
    clipped-left
    elevate-on-scroll
    height="190"
    color="#F8F8F8"
  >
  <div
    class="header-wrapper"
  >
    <div
      class="header-nav"
    >
      <div>
          <div class="main-logo">
            <v-img
               :src="require('../assets/Fisolini_Logo.svg')"
               contain
            />
          </div>
      </div>

      <div
        class="nav-section"
      >
      <v-row>
          <v-col
            :cols="locationCols"
            align-self="start"
            style="min-width: 180px"
            class="pt-0 pb-0"
          >
            <TheLocation />
          </v-col>

          <v-col
            :cols="tabsCols"
            align-self="end"
            class="pt-0 pb-0"
          >
            <TheNavigation
              :tabs="pages"
            />
          </v-col>

          <v-col
            v-if="largeScreen" cols="1"
          ></v-col>

          <v-col
            :cols="searchCols"
            class="pb-0 pt-4"
          >
            <v-text-field
                outlined
                filled
                clearable
                label="Поиск по таварам"
                type="text"
                hide-details
                color="grey"
                dense
            >
                <template v-slot:append>
                  <v-fade-transition leave-absolute>
                    <span >
                      <v-divider vertical></v-divider>
                      <v-btn
                        height="25"
                        width="25"
                        style="margin-top: -4px"
                        class="ml-2"
                        icon
                        large
                      >
                        <v-icon> mdi-magnify </v-icon>
                      </v-btn>
                    </span>
                  </v-fade-transition>
                </template>
            </v-text-field>
          </v-col>
        </v-row>
      </div>

      <div
        class="user-section"
      >
        <v-row >
          <v-col
            :cols="userCols"
            :order="userOrder"
            align-self="end"
            :class="{
              'pa-1': middleScreen || mLargeScreen,
              'pb-0 pt-9': largeScreen,
            }"
          >
            <span
              :class="{
                'float-right': middleScreen|| mLargeScreen
              }"
            >
              <v-btn
                class="teal--text mr-3"
                color="white"
                depressed
                large
              >
                <v-icon large left>
                  mdi-account
                </v-icon>
                  Войти
              </v-btn>

              <v-badge
                color="teal"
                content="3"
                overlap
              >
                <v-btn
                  class="teal--text"
                  color="white"
                  depressed
                  large
                >
                <v-icon large left>
                   mdi-cart
                 </v-icon>
                    Корзина
                </v-btn>
              </v-badge>
            </span>
          </v-col>
          <v-col
            :cols="feedbackCols"
            :order="feedbackOrder"
            align-self="end"

            :class="{
              'pa-0': middleScreen || mLargeScreen,
              'pb-0': largeScreen
            }"
          >
            <span
              :class="{'float-right': middleScreen || mLargeScreen}"
            >
              <FeedbackInfo
                desktop
                :laptop="mLargeScreen || middleScreen"
              />
            </span>
          </v-col>
        </v-row>
      </div>

    </div>

    <div
      class="filters"
    >
      <span
        v-for="filter in filters"
        :key="filter.value"
        class="filter"
      >
        <v-select
          :label="filter.title"
          :items="filter.items"
        ></v-select>
      </span>
    </div>
  </div>
  </v-app-bar>
</v-card>
</div>

</template>

<script>
    import MobileHeader from '@/components/MobileHeader.vue';
    import FeedbackInfo from '@/components/FeedbackInfo.vue'
    import TheLocation from  '@/components/TheLocation.vue';
    import TheNavigation from '@/components/TheNavigation.vue';

    export default {
        name: 'TheHeader',

        components: {
          MobileHeader,
          FeedbackInfo,
          TheLocation,
          TheNavigation,
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

            filters: [
              {
                title: 'Цвет',
                value: 'color',
                items: ['green', 'yellow']
              },
              {
                title: 'Модель',
                value: 'model',
                items: ['large', 'middle', 'small']
              },
              {
                title: 'Модель',
                value: 'model',
                items: ['large', 'middle', 'small']
              },
              {
                title: 'Модель',
                value: 'model',
                items: ['large', 'middle', 'small']
              },
              {
                title: 'Модель',
                value: 'model',
                items: ['large', 'middle', 'small']
              },
            ]
          }
        },

        computed: {
          screenWidth() {
            return (
              this.$vuetify.breakpoint.sm ? 'small'
              : (this.$vuetify.breakpoint.md && this.$vuetify.breakpoint.width < 1195) ? 's-middle'
              : (this.$vuetify.breakpoint.md && this.$vuetify.breakpoint.width > 1194) ? 'middle'
              : (this.$vuetify.breakpoint.lg && this.$vuetify.breakpoint.width < 1655) ? 's-large'
              : (this.$vuetify.breakpoint.lg && this.$vuetify.breakpoint.width > 1554) ? 'large'
              : this.$vuetify.breakpoint.xl ? 'x-large' : 'xs'
            )
          },

          sMiddleScreen() {
            return this.$vuetify.breakpoint.width < 1195
          },
          middleScreen() {
            return this.screenWidth === 'middle'
          },
          largeScreen() {
            return this.screenWidth === 'large' || this.screenWidth === 'x-large'
          },
          mLargeScreen() {
            return this.screenWidth === 's-large'
          },

          locationCols() {
            return this.largeScreen ? '12' : '3'
          },
          tabsCols() {
            return this.largeScreen ? '7' : '8'
          },
          searchCols() {
            return this.largeScreen ? '4' : '6'
          },
          userCols() {
              return this.largeScreen ? '7' : '12'
          },
          feedbackCols () {
            return this.largeScreen ? '5' : '12'
          },
          feedbackOrder() {
            return this.largeScreen ? '2' : '1'
          },
          userOrder() {
            return this.largeScreen ? '1' : '2'
          },
        }
    }
</script>

<style scoped>
  .header-wrapper {
    margin: 0 auto;
    padding-top: 20px;
  }
  .header-nav {
    display: flex;
  }
  .filters {
    display: flex;
    width: 600px;
    padding-top: 23px;
  }
  .filter {
    margin-right: 12px;
  }

  .nav-section {
    min-width: 630px;
    max-width: 920px;
    margin: 0 12px;
  }

  .user-section {
      max-width: 570px;
      min-width: 300px;
  }

  .main-logo {
    width: 190px;
    height: 69px;
    float: right;
  }

  .float-right {
    float: right;
  }
</style>
