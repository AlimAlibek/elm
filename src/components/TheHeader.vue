<template>
<v-card >
  <v-app-bar
    flat
    absolute
    app
    clipped
    min-height="100"
    height="190"
  >

    <v-row
      align="center"
      :class="{
        'main-row_large': (screenWidth === 'large')
      }"
    >
      <v-col
        cols="2"
      >
          <div class="main-logo">
            <v-img
               :src="require('../assets/Fisolini_Logo.svg')"
               contain
            />
          </div>
      </v-col>

      <v-col
        cols="6"
        lg="7"
        md="7"
      >
        <v-row
          style="min-width: 500px"
        >
          <v-col
            class="ma-0 pa-0"
            cols="12"
            lg="12"
            md="3"
          >
            <span >
                <v-icon color="cyan darken-1" >
                    mdi-map-marker-outline
                </v-icon>
                <span>
                    Москва и МО
                </span>
                <v-icon>
                    mdi-chevron-down
                </v-icon>
            </span>
          </v-col>


          <v-col
            class="ma-0 pa-0"
            cols="8"
            lg="8"
            md="9"
            align-self="end"
          >

            <v-tabs
              v-model="currentPage"
              height="25"
              style="width:480px"
            >
              <!-- <v-tabs-slider color="yellow"></v-tabs-slider> -->
              <v-tab
                v-for="page in pages"
                :key="page.name"
              >
                <span class="tab-title">
                  {{ page.name }}
                </span>
              </v-tab>
            </v-tabs>

          </v-col>

          <v-col
            :class="{
              'ma-0': screenWidth === 'large',
              'pa-0': screenWidth === 'large'
            }"
            cols="4"
            lg="4"
            md="6"
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
      </v-col>

      <v-col
        class="pt-0 pb-0"
        cols="4"
        lg="3"
        md="3"

      >
        <v-row>
          <v-col
            :class="{
              'ma-0': screenWidth === 'middle',
              'pa-0': screenWidth === 'middle'
            }"
            cols="7"
            lg="5"
            md="12"
            order="1"
            order-xl="1"
            order-lg="2"
            order-md="2"
            align-self="end"
            style="min-width: 290px"
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

          </v-col>
          <v-col
            :class="{
              'ma-0': screenWidth === 'middle',
              'pa-0': screenWidth === 'middle'
            }"
            cols="5"
            lg="5"
            md="12"
            order="2"
            order-xl="2"
            order-lg="1"
            order-md="1"
          >
            <span
              :class="{'float-right': screenWidth === 'middle'}"
            >
              <FeedbackInfo
                desktop
                :laptop="screenWidth === 'large' || screenWidth === 'middle'"
              />
            </span>

          </v-col>
        </v-row>
      </v-col>

    </v-row>

    <div
      style="position: absolute; top: 300px; right: 100px"
    >
      {{screenWidth}}
    </div>

  </v-app-bar>
</v-card>
</template>

<script>
    import FeedbackInfo from '@/components/FeedbackInfo.vue'

    export default {
        name: 'TheHeader',

        components: {
          FeedbackInfo
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
    }
</script>

<style scoped>
  /* .main-row_large {
    background: goldenrod;
  } */

  .main-logo {
    width: 190px;
    height: 69px;
    float: right;
  }

  .search-input {
    /* border: 1px solid; */
    display: flex;
  }
  .tab-title {
    text-transform: none;
    font-size: 16px;
    margin: -8px;
  }

  .float-right {
    float: right;
  }
</style>
