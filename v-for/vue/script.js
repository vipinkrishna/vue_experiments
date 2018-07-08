// console.log(Vue)

const vm = new Vue({
    el: "#parent",
    data: {
        text: ""
    },
    computed: {
        getwords() {
            return this.text.split(" ");
        }
    },
    methods: {
        getitems() {
            return this.text.split(" ");
        }
    }
});

