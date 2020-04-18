import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
	icons: {
			iconfont: ['fas fa-music', 'fas fa-heart']
		},
}

export default new Vuetify(opts)