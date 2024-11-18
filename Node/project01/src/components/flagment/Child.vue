<template>
<div>
    <DeepChildVue :deepChildData=childData />
</div>
</template>


<script>
import DeepChildVue from './DeepChild.vue';

export default{ 
    name:'',
    components:{DeepChildVue},
    props:{
        childData: String 
    },
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>