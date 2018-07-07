// console.log(Vue)

new Vue({
    el: "#parent",
    data: {
        txtInputVariable: "Hello!"
    },
    methods: {
        txtInputHandler(event) {
            // console.log(event);
            // console.log(event.target);
            this.txtInputVariable = event.target.value;
            console.log(this.txtInputVariable);
            // console.log(event.data);
        }
    }
});