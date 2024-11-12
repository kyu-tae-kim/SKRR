<template>
<div>
    <div class="{text-red: hasError, active: isActive: active}">클래스 바인딩</div>
    <div :class="class2">클래스 바인딩</div>
    <div :class="class3">클래스 바인딩</div>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            isActive: flase,
            hasError: true,
            class2: ['actuve','text-red'],
            class3: [ 'text-red'],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>
<script scopted>


</script>