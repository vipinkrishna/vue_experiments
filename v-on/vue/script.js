// console.log(Vue)

new Vue({
    el: "#parent",
    data: {
        message: "Hello World!"
    },
    methods: {
        handleClick(...args) {
            console.log(args); 
        }
    }
});