<template>
  <h1>Ma toute premirere app Vue</h1>
  <div v-if="showModal">
    <ModaleComponent
      :entete="entete"
      :text="text"
      :theme="valeur"
      @close="toggleModal"
    >
    <h1>PDG.COM</h1>
    <p>Saisissez l'opportunite des maintenant</p>
    <template v-slot:liens>
        <a href="#">Clique ici</a>
        <a href="#">Read more...</a>
    </template>
    <template v-slot:defau>
      <p>Votre text par defaut ici</p>
    </template>
    </ModaleComponent>
  </div>
  <teleport to="#modals" v-if = 'showModalTwo'>
    <ModaleComponent :entete="entete"
      :text="text"
      :theme="valeur"
      @close="toggleModalTwo">

      <h1>PDG.COM2</h1>
    <p>Saisissez l'opportunite des maintenant2</p>
    <template v-slot:liens>
        <a href="#">Clique ici2</a>
        <a href="#">Read more...</a>
    </template>
    <template v-slot:defau>
      <p>Votre text par defaut ici2</p>
    </template>

    </ModaleComponent>
  </teleport>
  <button @click="toggleModal">Ouvrir modale</button>
  <button @click="toggleModalTwo">Ouvrir modale 2</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ModaleComponent from './components/ModaleComponent.vue'

export default {
  name: 'App',
  components: {
    ModaleComponent,
  },
  data() {
    return {
      title: 'Bienvenue dans notre premiere application vueJs',
      entete: 'Titre du modale',
      text: 'Contenu de notre modal',
      valeur: 'light',
      da: `<button><span v-on:click="darkThem" v-if = 'valeur === "dark"'>darkThem</span><span v-on:click="lightThem" v-else>darkThem</span></button>`,
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    HandleClick() {
      console.log(this.$refs.name)
      this.$refs.name.setAttribute('id', 'leid1')
      this.$refs.name.classList.add('active')
      this.$refs.name.setAttribute('placeholder', 'leid1')
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    },
    // lightThem(){
    //   this.valeur = 'light'
    // },
    // darkThem(){
    //   this.valeur = 'dark'
    // }
  },
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.actions {
  margin: 50px 0;
}

.dark .actions a {
  margin: 0 30px;
  border: solid 1px #ebebeb;
  padding: 15px 20px;
  border-radius: 15px;
  text-decoration: none;
  color: #fff;
}
.dark .actions a:hover{
  background: #fff;
  color:#000;
}
.light .actions a {
  margin: 0 30px;
  border: solid 1px #080808;
  padding: 15px 20px;
  border-radius: 15px;
  text-decoration: none;
  color: rgb(9, 9, 9);
}
.light .actions a:hover{
  background: #080808;
  color:#fff;
}
</style>
