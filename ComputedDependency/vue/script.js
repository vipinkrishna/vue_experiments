// console.log(Vue)

new Vue({
    el: "#parent",
    data: {
        name: "computed",
        anothername: "methods"
    },
    computed: {
        computed_prop() {
            console.log("computed_prop called");
            return this.name + ".com";
        }
    },
    methods: {
       methods_prop(){
           console.log("methods_prop() called");
           return this.anothername + ".com";
       }
    }
});