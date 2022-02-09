import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                accent: '#3b82f6',
                background: '#212121'
            },
            light: {
                accent: '#673ab7',
                background: '#fff'
            }
        }
    }
});
