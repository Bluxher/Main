const app = Vue.createApp({
    data() {
        return{
            showBooks: true,
            title: "The Final Empire",
            author: 'Brandon Sanderon',
            age: 45
        };
    },
    methods: {
        // changeTitle() {
        //     this.title = 'Words of Randiance'
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
});

app.mount('#app');