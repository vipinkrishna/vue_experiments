// console.log(Vue)

new Vue({
    el: "#parent",
    data: {
        message: "Hello World!"
    },
    methods: {
        helloworld() {
            return "Hello!"  // WORKS
            // return this.message  //WORKS
            // return [1,2,3]  //WORKS
        },
        callMethod: function() {
            console.log(this) //VUE
        },
        callOtherMethod: () => {
            console.log(this)//WINDOW
        }
    }
});