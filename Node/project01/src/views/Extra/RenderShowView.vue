<template>
<div>
    <p>당신의 가장 좋아하는 프로선수는 누구입니까?</p>
    <input type="radio" name="" id="one" value="son" v-model="selectedPlayer">
    <label for="one">1. 손흥민</label>&emsp;
    <input type="radio" name="" id="two" value="messi" v-model="selectedPlayer">
    <label for="two">2. 메시</label>&emsp;
    <input type="radio" name="" id="three" value="zinu" v-model="selectedPlayer">
    <label for="three">3. 호나우지뉴</label>
    <input type="radio" name="" id="four" value="lee" v-model="selectedPlayer">
    <label for="four">4. 이강인</label>&emsp;
    <input type="radio" name="" id="five" value="other" v-model="selectedPlayer">
    <label for="five">5. 기타</label>&emsp;
    <!-- <input type="text" v-if="selectedPlayer === 'other'"> -->
    <input type="text" v-show ="selectedPlayer === 'other'">

</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            selectedPlayer:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>