const app = {
    data() {
        return {
            heart: 'images/heart.png',
            name:"Why don't we",
            type:"Music Band",
            photos: [{
                    src: 'images/jack.jpg',
                    done: false,
                },
                {
                    src: 'images/corbyn.jpg',
                    done: false,
                },
                {
                    src: 'images/jonah.jpg',
                    done: false,
                },
                {
                    src: './images/zach.jpg', 
                    done: false,
                },
                {
                    src: './images/daniel.jpg', 
                    done: false,
                }
            ]
        }
    },
    methods: {
        favIcon(index){
            this.photos[index].done = !this.photos[index].done
        }
    },
    computed: {
        countLike() {
            return this.photos.filter(t => !t.done).length
        },
        countofphotos() {
            return this.photos.length
        }
    }
}
Vue.createApp(app).mount('#app')