// console.log(Vue)

const vm = new Vue({
    el: "#parent",
    data: {
        text: ""
    },
    computed: {
        getobject() {
            let obj = {};
            this.text.split(" ").forEach(word=>{
                obj[word] = obj[word] || 0;
                obj[word]++;
            });
            return obj;
        }
    },
    methods: {
        getarray() {
            return this.text.split(" ");
        }
    }
});

