new Vue({
    el: '#root',
    data: {
        greeting: 'yo',
        count: 0,
        email: '',
        htmlTest: '',
        cats: ['Dimpsy','Bulbasaur','Mittens','Mephistopheles'],
        dogs: [
            {name: 'Potato'},
            {name: 'Rusker'},
            {name: 'Floppydoodle'}
        ],
        newDog: '',
        newCat: ''
    },
    methods: {
        addDog: function() {
            this.dogs.push({name: this.newDog})
            this.newDog = ''
        },
        addKitty: function() {
            this.cats.push(this.newCat)
            this.newCat = ''
        }
    },
    filters: {
        capitalize: function(value) {
            return value.toUpperCase()
        },
        kittify: function(value) {
            return value + 'y'
        }
    },
    computed: {
        kittifyName: function() {
            if (this.newCat.length>1) {
                return this.newCat + 'y'
            }
        }
    }
})