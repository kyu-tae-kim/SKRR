<template>
<div>
    <input type= "text" name="" id="" v-model="userId">
    <button @click="checkId()">ID_CHECK</button>
    <input type= "text" name="" id="" :value="userId">
    <br/>
      <input type="search" v-model="text1"/>
     <button :disabled="text1 ===''">조회</button>
    <br/>
    <br/>
    <img src="@/assets/puppy-4583450_1280.jpg" alt="" style="width:300px; height:auto"/>
    <br/>

    <p :style="style1">{{title}}</p>
     <img :src= "img1"  alt= "" style="width:300px; height:auto"/>


</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userId:'PieterKim',
            img1: "puppy-4583450_1280.jpg",
            title: "배고프다",
            style1: {
                color: "dodgerblue",
                fontSize: "30px"
                },
                text1: ""
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        checkId(){
            console.log(this.userId)
        }
    }
}

</script>