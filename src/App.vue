<template>
  <v-app dark>
    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-nav
      :active.sync="activeNav"
      :value="showNav"
      color="sv_purple"
      fixed
      app
      >
      
      <router-link v-for="item in items" :key="item.id" :to="item.link" class="sv-bottomNav-link">
        <v-btn
          color="sv_purple_light"
          flat
          value="recent"
        >
          <span v-html="item.text"></span>
          <v-icon v-html="item.icon"></v-icon>
        </v-btn>
      </router-link>
    </v-bottom-nav>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      showNav: true,
      activeNav: 0,
      items: []
    }
  },
  mounted() {
    this.items = [
      { id: 0, name: 'ScareCode', text: '扫码', icon: 'home', link: '/ScareCode' },
      { id: 1, name: 'Attendance', text: '列表', icon: 'equalizer', link: '/Attendance' },
    ];
  },
}
</script>

<style scoped>

.router-link-active .sv-bottom-nav-btn{ opacity: 1 !important; }
.sv-bottomNav-link{ text-decoration: none; }
</style>
