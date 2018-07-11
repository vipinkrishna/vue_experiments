// console.log(Vue)

const vm = new Vue({
    el: "#parent",
    data: {
        classObject: {
            red: false,
            blue: true
        }
    },
    computed: {},
    methods: {
        toggle() {
            this.classObject.red = !this.classObject.red;
            this.classObject.blue = !this.classObject.blue;
        }
    }
});