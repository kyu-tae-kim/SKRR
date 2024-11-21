<template>
<div>
    <a id="kakao-login-btn" @click="kakaoLogin">
        <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
        width="222"
        alt="카카오 로그인 버튼" />
    </a>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        kakaoLogin() {
            Kakao.Auth.authorize({
                redirectUri: 'http://localhost:8080/auth',
                prompt: 'login'
            });
        },
        loginedObj() {
            Kakao.API.request({
            url: '/v1/user/update_profile',
            data: {
            properties: {
            '${CUSTOM_PROPERTY_KEY}': '${CUSTOM_PROPERTY_VALUE}',
            },
        },
    })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
        }
    }
}
</script>