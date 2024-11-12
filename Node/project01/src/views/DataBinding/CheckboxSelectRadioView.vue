<template>
<div>
    <div>
        <h1>My Favorite Teams</h1>
        <p>{{favoriteTeam}}</p>
    </div>
    <input type="checkbox" name="" id="T1" value="T1" v-model="favoriteTeam" />
    <label for="T1">T1</label>
    <input type="checkbox" name="" id="Gen.G" value="Gen.G" v-model="favoriteTeam" />
    <label for="Gen.G">Gen.G</label>
    <input type="checkbox" name="" id="BLG" value="BLG" v-model="favoriteTeam" />
    <label for="BLG">BLG</label>
    <br />
    <br />
    <div>
        <h1>My Favorite Icecream</h1>
        <p>{{Icecream}}</p>
    </div>
    <select name="" id="" v-model="Icecream">
        <option value="엄마는 외계인">엄마는 외계인</option>
        <option value="바닐라">바닐라</option>
        <option value="슈팅스타">슈팅스타</option>
        <option value="스크류바">스크류바</option>
    </select>
    <br />
    <br />
        <h1>My Favorite Language</h1>
        <p>{{Language}}</p>
    <div>
        <input type="radio" name="" id="kor" value="Korean" v-model="Language" />
        <label for="kor">Korean</label>
    </div>
    <br />
    <div>
        <input type="radio" name="" id="eng" value="English" v-model="Language" />
        <label for="eng">English</label>
    </div>
    <br />
    <div>
        <input type="radio" name="" id="jap" value="Japenese" v-model="Language" />
        <label for="jap">Japenese</label>
    </div>
    <br />
    <div>
        <input type="radio" name="" id="spa" value="Spanish" v-model="Language" />
        <label for="spa">Spanish</label>
    </div>
    <br />
    <div>
        <input type="radio" name="" id="none" value="없음" v-model="Language" />
        <label for="none">없음</label>
    </div>
</div>
</template>


<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            favoriteTeam:[],
            Icecream:'',
            Language:'',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>