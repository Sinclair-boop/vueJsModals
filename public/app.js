const app = Vue.createApp({
  data() {
    return {
      icon: '🚀',
      showIcon: true,
      connecter: false,
      autheur: 'Les Pros',
      age: 25,
      bio: 'Un gars tres coollll',
      showBio: false,
    }
  },
  methods: {
    augmenterAge() {
      this.age++
    },
    diminuerAge() {
      this.age--
    },
    estConnecter() {
      this.autheur = 'Sinclair'
      this.icon = '🦸'
      this.connecter = true
    },
    estDeconnecter() {
      this.autheur = 'Les Pros'
      this.icon = '🚀'
      this.connecter = false
    },
  },
})

app.mount('#app')
console.log('Salut les pros...')
