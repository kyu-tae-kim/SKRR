<template>
<div>
    <div>
        <!-- <input type="text" name="" id="" v-model="myName"> -->
        <input type="text" name="" id="" v-model="yourName">
    </div>
    <div>
        <p>{{ myName }}</p>
        <p>{{ yourName }}</p>
    </div>
    <div>
        <select name="" id="" v-model="selected">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
    </div>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            myName:'',
            yourName:'',
            selected:'',
            selectedHistory: []
        };
    },
    watch:{
        myName() {
            return console.log(this.myName)
        },
        yourName(newValue, oldValue){
            console.log('oldValue :', oldValue);
            console.log('newValue :', newValue);
        },
        selected(newValue){
            this.selectedHistory.push(newValue);
            console.log(this.selectedHistory);
        }
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>