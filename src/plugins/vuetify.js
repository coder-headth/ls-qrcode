import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/src/stylus/app.styl'
import VueQrcodeReader from 'vue-qrcode-reader'

Vue.use(Vuetify, {
  theme: {
    sv_red: '#c7161e',
    sv_write: '#c9c9c9',
    sv_gray: '#999999',
    sv_purple: '#2c303b',
    sv_purple_light: '#676c8a',
    sv_purple_dark: '#1f212d',
    sv_chart_red: '#fe6c6e',
    sv_chart_green: '#2eba87',
    sv_chart_blue: '#5478e5',
    sv_chart_yellow: '#ffc000'
  },
  iconfont: 'md',
})

Vue.use(VueQrcodeReader);
