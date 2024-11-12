<template>
<div>
    <div v-html="htmlString"></div>
    <div v-html="htmlString" :style="style1"></div>
    <button @click="style1.color = 'Green'"> 색상바꾸기 </button>
    <button @click="colors()"> 로그확인 </button>
    <button @click="style1.color= 'blue'" > 원래대로 </button>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            htmlString : '<h1 style="color: orchid">PieterKim</h1><p>Hello Welcome Mysite</p>',
            style1 : {
                color: 'blue',
                fontSize : '15px',
            }
        };
    },
    setup(){},
    created(){

    },
    mounted(){},
    unmounted(){},
    methods:{
        colors () {
            console.log(this.style1.color)
        }
    }
}

</script>