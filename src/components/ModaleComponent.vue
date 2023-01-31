<template>
  <div class="modal-bg" @click.self="closeModal">
    <div
      class="modal"
      :class="{ dark: theme === 'dark', light: theme === 'light' }"
    >
      <h1>{{ entete }}</h1>
      <p>{{ text }}</p>
      <slot></slot>
      <hr />
      <div><slot name="defau"></slot></div>
      <hr />
      <div class="actions">
        <slot name="liens"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['entete', 'text', 'theme'],
  methods: {
    closeModal() {
      this.$emit('close')
    },
    // lightThem(valeur){
    //   valeur = 'light'
    // },
    // darkThem(valeur){
    //   valeur = 'dark'
    // }
    // convert() {
    //   console.log(this.da)
    //   const daa = this.da.innerHTML
    //   return daa
    //   console.log(this.da.innerHTML)
    // },
  },
}
</script>

<style scoped>
.modal-bg {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
}
.modal {
  width: 400px;
  padding: 40px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
}
h1 {
  color: blueviolet;
  font-size: 2.5rem;
}
p {
  font-style: normal;
}
.dark {
  background-color: #111;
  color: #fff;
}

.light {
  background-color: #fff;
  color: #111;
}
</style>
