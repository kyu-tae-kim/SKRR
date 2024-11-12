<template>
<div>
    <table>
        <thead>
            <tr  :key= "car.Id" v-for="car in sportscar">
                <th>{{ car.Id }}</th>
                <th>{{ car.Name }}</th>
                <th>{{ car.comp }}</th>
                <th>{{ car.price }}</th>
                <th><input type="text" v-model='car.qty' /></th>
                <th>{{ car.price * car.qty }}￦원</th>
            </tr>
        </thead>
    </table>
    <br />
    <br />
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Height</th>
                <th>Weight</th>
                <th>BMI</th>
            </tr>
        </thead>
        <tbody>
            <tr :key='index' v-for="(people, index) in peopleList">
                <th>{{people.id}}</th>
                <th>{{people.name}}</th>
                <th><input type="text" v-model=people.height /></th>
                <th><input type="text" v-model=people.weight /></th>
                <th>{{ calBMI(people) }}</th>
            </tr>
        </tbody>
    </table>
</div>
</template>



<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sportscar:[
            {
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

            ],
            
            peopleList:[
                {
                    id: '1',
                    name: 'Pieter',
                    height: 0,
                    weight:0,
                },{
                    id: '2',
                    name: 'Mike',
                    height: 0,
                    weight:0,
                },{
                    id: '3',
                    name: 'Beyonce',
                    height: 0,
                    weight:0,
                },{
                    id: '4',
                    name: 'Matilda',
                    height: 0,
                    weight:0,
                },
            ]
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        calBMI(people){
            const height = (people.height/100)**2
            return people.weight / height
        }
    }
}

</script>