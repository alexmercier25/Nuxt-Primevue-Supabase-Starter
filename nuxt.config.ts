export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase'],
    css: [
      "primevue/resources/themes/lara-light-indigo/theme.css",
      'primevue/resources/primevue.css',
      'primeicons/primeicons.css',
      'primeflex/primeflex.css'
    ],
    build: {
      transpile: ['primevue']
    },
    // Head elements
    // app: {
    //   head: {
    //     script: [
    //       {
    //         src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDGI8ze4KYboK1qSivwSZI3m0xm_H1U6-U&libraries=places"
    //       }
    //     ]
    //   }
    // },
    // Define environment variables for the application
    // appConfig: {
    //   stripePublicKey: process.env.STRIPE_PUBLIC_KEY ?? "",
    // }
  })
  