<template>
<div>
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
            selectedNum: 0
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        callParent() {
            this.$emit('change-num', this.selectedNum)
        }
    }
}

</script>