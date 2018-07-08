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
                obj[word] = obj[word] || {word, count:0};
                obj[word].count++;
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

