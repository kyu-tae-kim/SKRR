<template>
<div class="container">
    <form id="login-form" @submit.prevent="login">
        <div class="input-group">
            <label for="email">이메일</label>
            <input id="email" type="text" v-model="loginData.snsid"/>
        </div>
        <div class="input-group">
            <label for="password">비밀번호</label>
            <input id="password" type="password" v-model="loginData.password"/>
        </div>
        <router-link to ="/join" class="btn">회원가입 </router-link>
        <button id="login" type="submit" class="btn">로그인</button>
    </form>
</div>
</template>
<script>
import axios from 'axios';

export default{ 
    name:'',
    components:{},
    data(){
        return{
            loginData:
            {
                snsid: '',
                password: ''
            }
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        login() {
            const result = axios.post("http://localhost:3000/auth/login", this.loginData)
            console.log(result)
        }
    }
}
</script>