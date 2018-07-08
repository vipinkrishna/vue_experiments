// console.log(Vue)

const vm = new Vue({
    el: "#parent",
    data: {
        name: "computed",
        anothername: "methods",
        yetanothername: "methodsstar"
    },
    computed: {
        computed_prop() {
            console.log("computed_prop called");
            return this.name + ".com";  //UNCOMMENT AND SEE THE DIFFERENCE
            // return "java" + ".com";  //UNCOMMENT AND SEE THE DIFFERENCE
        }
    },
    methods: {
        methods_prop() {
            console.log("methods_prop() called");
            return this.anothername + ".com";
        },
        methods_starprop() {
            console.log("methodsstar_prop() called");
            return this.yetanothername + ".com";
        }
    }
});

// setInterval(()=>{vm.anothername ="UPDATE TEST!"},5000);