<template>
<div id="app" class="container mt-5">
    <h1>내 Todo App</h1>

    <div>
            <form @submit.prevent="addTodo" class="input-group">
                <div class="input-group mb-3">
                    <input type="text" v-model="newTodoText" class="form-control"  aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary input-group" type="submit" id="button-addon2">입력</button>
                </div>
            </form>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Re-title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in todos" :key="todo.id">
                        <td class="align-middle">{{todo.id}}</td>
                        <td class="align-middle">{{todo.title}}</td>
                        <td class="align-middle text-center">
                            <div class="form-check form-switch d-flex justify-content-center">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" @change="changeStatus(todo)" v-model="todo.done">
                            </div>
                        </td>
                        <td><button @click="deleteTodo(todo.id)" class="btn btn-danger btn-sm">삭제</button></td>
                        <td><button @click="openModal(todo.id)" class="btn btn-warning btn-sm">수정</button></td>
                    </tr>
                </tbody>
            </table>
            <form @submit.prevent="">
                <input type="file" @change="fileChange"/>
                <button type="submit" class="btn btn-primary" @click="uploadImage">Upload</button>
            </form>
        </div>
        <!-- Modal -->
        <div v-if="isModalVisible" class="modal d-block" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Todo Title Update</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <input type="text" class="form-control" v-model="editTitle">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
                    <button type="button" class="btn btn-primary" @click="updateTitle">Save changes</button>
                </div>
                </div>
            </div>
    </div>
</div>

</template>
<script>
import axios from 'axios'
export default{ 
    name:'',
    components:{},
    data(){
        return{
            todos:[],
            newTodoText:'',
            isModalVisible: false,
            choiceId: 0,
            editTitle:'',

            file: null,
            images: [],
        };
    },
    setup(){},
    created(){
        this.getTodo(),
        this.getImages(),
    },
    mounted(){},
    unmounted(){},
    methods:{
        async getTodo(){
            const response = await axios.get('http://localhost:3000')
            this.todos = response.data
            console.log(this.todos)
        },

        async addTodo(){
            const response = await axios.post('http://localhost:3000/', {title: this.newTodoText});
            this.todos = response.data
            console.log(response.data)
        },

        async changeStatus(todo){
            await axios.put(`http://localhost:3000/${todo.id}`, {done : todo.done})
            console.log(this.todos)
        },

        async deleteTodo(id){
            const response = await axios.delete(`http://localhost:3000/${id}`)
            // this.todos = this.todos.filter(todo=> todo.id !== id)
            this.todos = response.data
        },

        async updateTitle(){
            const response = await axios.put(`http://localhost:3000/update/${this.choiceId}`, {title: this.editTitle})
            this.todos = response.data
            this.closeModal()
        },
        openModal(id){
            this.isModalVisible = true
            this.choiceId = id
            console.log(this.choiceId)
        },
        closeModal(){
            this.isModalVisible = false
            this.editTitle = ''
        },
        fileChange(event){
            this.file = event.target.files[0]
            console.log(this.file)
        },

        async uploadIamage(){
            if (!this.file) return;

            const formData = new FormData();
            formData.append('image', this.file);

            axios.post('http://localhost:3000/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(formData)
        },
        async getImages(){
            const response = await axios.get('http://localhost:3000/image');
            this.images = response.data;
        }
    }
}
</script>