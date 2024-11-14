<template>
<div>
    <h1>PageView</h1>
    <br />
    <br />
    <PageTitle title="마이클 타이슨" number=10 />
</div>
</template>


<script>
import PageTitle from "@/components/flagment/PageTitle.vue";

export default{ 
    name:'',
    components:{PageTitle},
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