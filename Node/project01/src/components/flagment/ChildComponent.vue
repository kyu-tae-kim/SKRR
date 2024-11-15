<template>
<div>
    <p>{{ childData }}</p>
    <p>{{str}}</p>
    <p>{{num}}</p>
    <p>{{bool}}</p>
    <p>{{arr}}</p>
    <p>{{obj}}</p>
    <select name="" id="" @change="callParent" v-model="selectedNum">
        <option :value="n" :key="n" v-for="n in arr">{{ n }}</option>
    </select>

</div>
</template>


<script>

export default{ 
    props:{
        str : {
            type: String,
            default: ""
        },
        num : {
             type: Number,
            default: 0
        },
        bool : {
            type: Boolean,
            default: true
        },
        arr : {
            tyoe: Array,
            default : function(){
                return []
            }
        },
        obj : {
            type: Object,
            defualt: function(){
                return {}
            }

        },

    },
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            selectedNum: 0,
            childData : '이 데이터는 자식컴포넌트에서 전달된 데이터입니다.'
        };
    },
    computed : {
        computedMethod() {
            console.log('Computed Method')
        },
    },
    setup(){},
    created(){},
    mounted(){
        this.$emit('child-send', this.childData)
    },
    unmounted(){},
    methods:{
        callParent() {
            this.$emit('change-num', this.selectedNum)
        },
        childPrint() {
            console.log(this.childData)
        }
    }
}

</script>