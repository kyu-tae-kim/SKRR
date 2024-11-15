<template>
<div>
    <h1>Parent Component</h1>
    <br />
    <br />
    <h2>{{ recivedData }}</h2>
    <button @click="changeValue" class="btn btn-outline-dark">ChildData</button>
    <div>
        <Child 
        str="start"
        :num=10
        :bool=false
        :arr = parentArray
        @change-num="getData"
        @child-send='getChildData'
        ref = "child"
        />
    </div>
</div>
</template>


<script>
import ChildComponentVue from '@/components/flagment/ChildComponent.vue';

export default{ 
    name:'',
    components:{'Child' : ChildComponentVue},
    data(){
        return{
            parentNum : 10,
            parentArray : [1,2,3],
            recivedData: '',

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        getData(data) {
            console.log("getData 함수 호출");
            console.log(data);
        },
        getChildData(data) {
            this.recivedData = data
        },
        changeValue() {
            this.$refs.child.childData = "해당 데이터는 변경되었습니다."
            this.$refs.child.childPrint()
            this.$refs.child.computedMethod;
        } 
    }
}

</script>