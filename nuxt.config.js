export default {  
  target: 'static',
  
  head: {
    title: 'map-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  css: [
  ],
  
  plugins: [
  ],
  
  components: true,
  
  buildModules: [
  ],
  
  modules: [    
    '@nuxtjs/axios',    
    '@nuxtjs/pwa',
    'nuxt-leaflet'
  ],
  
  axios: {},
  
  build: {
  }
}
