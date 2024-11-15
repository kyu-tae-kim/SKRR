<template>
<div>
    <button class="btn btn-outline-primary" @click="doSearch">조회</button>
    <!-- <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>제품번호</th>
                <th>제품명</th>
                <th>제조회사</th>
                <th>가격</th>
            </tr>
        </thead>
        <tbody>
            <tr  :key= "car.Id" v-for="car in humidifer">
                <th>{{ car.Id }}</th>
                <th>{{ car.Name }}</th>
                <th>{{ car.Comp }}</th>
                <th>{{ car.price }}</th>
            </tr>
        </tbody>
    </table> -->

<simpleGrid 
:headers = "headers"
:items = "humidifer"
/>


</div>
</template>


<script>
import simpleGridVue from '@/components/flagment/simpleGrid.vue';

export default{ 
    name:'',
    components:{'simpleGrid' : simpleGridVue},
    data(){
        return{
            humidifer: [],
            headers:[
                {title: "제품번호", key:'Id'},
                {title: "제품명", key:'Name'},
                {title: "제조회사", key:'Comp'},
                {title: "가격", key:'price'},
            ]
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        doSearch() {
            this.humidifer = [{
                Id: '1',
                Name:'2025 포르쉐 타이칸 크로스 투리스모',
                Comp:'포르쉐',
                price:220000000,
                qty:0,
            },
            {
                Id: '2',
                Name:'2024 부가티 투르비온',
                Comp:'부가티',
                price:5665192000,
                qty:0,
            },
            {
                Id: '3',
                Name:'2022 페라리 296 GTS',
                Comp:'페라리',
                price:461000000,
                qty:0,
            },
            {
                Id: '4',
                Name:'2020 람보르기니 우라칸 에보 스파이더',
                Comp:'람보르기니',
                price:389400000,
                qty:0,
            },
            {
                Id: '5',
                Name:'2025 롤스로이스 컬리넌 블랙배지',
                Comp:'롤스로이스',
                price:670000000,
                qty:0,
            },
            ]
        }
    }
}

</script>