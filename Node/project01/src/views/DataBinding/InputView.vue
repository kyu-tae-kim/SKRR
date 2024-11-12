<template>
<div>
    <div>
        <button @click="calculator('+')">Plus(+)</button>&emsp;
        <button @click="calculator('-')">Minus(-)</button>&emsp;
        <button @click="calculator('*')">Product(*)</button>&emsp;
        <button @click="calculator('/')">Divide(/)</button>&emsp;
    </div>
    <br />
    <br />
    <input type="text" v-model.number="num1">
    <span>&emsp; {{ operator }} &emsp;</span>
    <input type="text" v-model.number="num2">
    <span>&emsp; = {{ result }}</span>
</div>
</template>

<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            operator:'+',
            num1 : 0,
            num2 : 0,
            result : 0
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        calculator(operate){
            this.operator = operate;
            switch (operate) {
                case '+':
                    this.result = this.num1 + this.num2;
                    break;
                case '-':
                    this.result = this.num1 - this.num2;
                    break;
                case '*':
                    this.result = this.num1 * this.num2;
                    break;
                case '/':
                    this.result = this.num1 / this.num2;
                    break;                                        
                
            }
        }
    }
}
</script>