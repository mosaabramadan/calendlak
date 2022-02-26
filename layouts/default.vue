<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      permanent
      width="20vw"
      app
      right
      class="ma-3 rounded-lg"
      height="calc(100vh - 28px)"
    >
      <v-toolbar rounded="lg" flat>
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn-toggle v-show="!miniVariant" class="rounded" color="pimary">
          <v-btn nuxt to="/" small color="pimary" width="6.5vw">
            <v-icon small class="mr-1">mdi-chat</v-icon> Chat
          </v-btn>
          <v-btn nuxt to="/calendar" small color="pimary" width="6.5vw">
            <v-icon small class="mr-1">mdi-calendar</v-icon> Calendar
          </v-btn>
        </v-btn-toggle>
        <v-spacer />
        <v-btn icon>
          <v-avatar size="40" color="primary">M</v-avatar>
        </v-btn>
      </v-toolbar>
      <div style="max-height: calc(100vh - 64px - 28px)" class="hidescroll">
        <ConvoList />
      </div>
    </v-navigation-drawer>

    <v-main
      class="pr-3"
      :style="miniVariant ? 'max-width:calc(100vw - 56px)' : 'max-width:80vw'"
    >
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      section: 0,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  watch: {
    miniVariant() {
      this.$forceUpdate()
    },
  },
}
</script>
