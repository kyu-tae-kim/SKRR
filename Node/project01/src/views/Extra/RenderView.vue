<template>
<div>
    <!-- <button>조회</button>&emsp;  모든 유저에게 보임 -->
    <!-- <button v-if="userRole === 'A' || userRole === 'S'">판매물품등록</button>&emsp; 판매자,관리자 -->
    <!-- <button v-if="userRole === 'A' ">삭제</button>  관리자 -->

    <div v-if="userRole === 'C'">
        <button>조회</button>
    </div>
    <div v-else-if="userRole === 'S'">
        <button>조회</button> 
        <button>판매물품등록</button>  
    </div>
    <div v-else>
        <button>조회</button> 
        <button>판매물품등록</button>  
        <button>삭제</button> 
    </div>
      
    <br />
    <br />
    <select name="" id="" v-model="userRole">
        <option value="A">Admin</option>
        <option value="S">Saller</option>
        <option value="C">Customer</option>
    </select>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userRole:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>