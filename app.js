const app = Vue.createApp({
    data() {
        return{
            showBooks: true,          
            // title: "The Final Empire",
            // author: 'Brandon Sanderon',
            // age: 45,
            // x: 0,
            // y: 0,

            books:[
                {title: 'name of the wind', author: 'patrick rothfus', img: 'Assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'Assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'Assets/3.jpg', isFav: true}
            ],

            url: 'https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3'
        };
    },
    methods: {
        // changeTitle() {
        //     this.title = 'Words of Randiance'
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        // handleEvent(e, data) {
        //     console.log(e, e.type);
        //     if(data) {
        //         console.log(data);
        //     }
        // },
        // handleMouseMove(e){
        //     this.x= e.offsetX
        //     this.y= e.offsetY
        // }
        toggleFavStatus(e) {         
            e.isFav= !e.isFav
            console.log(e)
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount('#app');