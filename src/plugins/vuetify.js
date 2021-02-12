import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/src/locale/es.ts'
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    lang: {
        locales: { es },
        current: 'es',
      },
});
