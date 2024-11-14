<template>
<div>
    <label for="">가장 선호하는 프로그래밍 언어는?</label>
    <select name="" id="">
        <option value="" :key="lan.code" v-for="lan in language">
            {{ lan.title }}
        </option>
    </select>
</div>
</template>

<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            datasample: "sample Data",
            language: [],
        };
    },
    // **컴포지션 API 호출
    setup(){},

    // 옵션API가 초기화되기 전, data(), computed같은 옵션 API의 초기화 직전
    beforeCretate(){},

    // **data(), computed(), watch(), methods를 모두 초기화해서 사용준비가 끝난 상태
    created(){
        this.getLanguage()

    },

    // DOM 노드가 생성되기 전의 상태
    beforeMount(){},

    // **실제 DOM이 랜더링이 모두 끝난 상태
    mounted(){
        // this.getLanguage()
    },

    // 리랜더링(Data 변경..) 직전에 수행되는 단계
    beforeUpdate(){},

    // 리랜더링 된 후에 호출
    updated(){},

    // 현재 컴포넌트에서 빠져나오기 직전
    beforeUnmount(){},

    // **현재 컴포넌트에서 빠져나온 직후
    unmounted(){},

    methods:{
        getLanguage(){
            this.language = [{code:'01', title:'자바스크립트'}]
        
        }
    }
}

</script>