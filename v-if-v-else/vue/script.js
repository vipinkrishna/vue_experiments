// console.log(Vue)

const vm = new Vue({
    el: "#parent",
    data: {
        raining: true,
    },
    computed: {
    },
    methods: {
    }
});

setInterval(()=>{vm.raining = !vm.raining},3000);