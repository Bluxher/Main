<template>
  <h1>{{ title }}</h1>
  <p>Welcome.....</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">more info</a>
      </template>
      
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
      
    </Modal>
  </teleport>
  
  <div v-if="showModalTwo">
    <Modal theme="asdsadasd" @close="toggleModalTwo">
      <h1>WAAAAAAAAAAAAAA</h1>
    </Modal>
  </div>
  <button @click.alt="toggleModal">Open Modal(alt)</button>
  <button @click="toggleModalTwo">Open Modal Two</button>
  <!-- <input type="text" ref="name">
  <button @click="handleClick">click me</button> -->
</template>

<script>
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App',
      header: 'Sign up for the Giveaway',
      text: 'jsjsjsjsjsjsjsjsjsjsjsjsjsj',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
  // methods: {
  //   handleClick() {
  //     console.log(this.$refs.name)
  //     this.$refs.name.classList.add('active')
  //     this.$refs.name.focus()
  //   }
  // }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
