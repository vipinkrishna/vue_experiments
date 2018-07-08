// console.log(Vue)

const vm = new Vue({
    el: "#parent",
    data: {
        weather: "raining"
    },
    computed: {
    },
    methods: {
    }
});

const weathers = ["raining", "sunny",""];

setInterval(()=>{vm.weather = weathers[Math.floor(Math.random()*weathers.length)]},1000);