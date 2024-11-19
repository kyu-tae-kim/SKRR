<template>
<div>
    <p>{{ $t('hello', {name: userName }) }}</p>
    <p>{{ $t('welcome') }}</p>
    <p>{{ $t('language')}}</p>

    <button @click="changeLanguage('ko')">한국어</button>
    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('es')">Spanish</button>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userName:'김규태'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        changeLanguage(lang){
            this.$i18n.locale = lang;
        }
    }
}

</script>