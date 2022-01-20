<template>
    <form @submit.prevent="createTask">
        <text-field label="Task title" v-model="title"/>
        <check-box label="Is Task Completed" v-model="taskStatus"/>
        <footer>
            <button type="submit">Create Task</button>
            <button>
                <router-link to="/"> cancel</router-link>
            </button>
        </footer>
    </form>
</template>

<script>
    import TextField from "../UI/forms/TextField";
    import {ref} from "vue";
    import CheckBox from "../UI/forms/CheckBox";
    import {useStore} from "vuex";
    import {IonBackButton, IonButton} from "@ionic/vue"


    export default {
        name: "NewTaskCreator",
        components: {CheckBox, TextField, IonBackButton, IonButton},
        setup() {
            const store = useStore();
            const title = ref("");
            const taskStatus = ref(false);
            const createTask = () => {
                if (!title.value) {
                    return;
                }
                store.dispatch("addNewTask", {
                    "title": title.value,
                    "completed": taskStatus.value
                },);
                title.value="";
                taskStatus.value=false;
            };
            return {
                title,
                createTask,
                taskStatus
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }

    button {
        box-sizing: border-box;
        width: 10rem;
        height: 2rem;
        font-size: 1.2rem;
    }

    footer {
        border: 2px solid red;
    }
</style>