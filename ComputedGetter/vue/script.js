// console.log(Vue)

new Vue({
    el: "#parent",
    data: {
        prop1: "Static Property"
    },
    computed: {
        prop2() {
            return Math.random()
        }
    },
    methods: {
       prop3(){
           return Math.random()
       }
    }
});