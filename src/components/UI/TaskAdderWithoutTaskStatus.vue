<template>
    <form @submit.prevent="addNewTask">
        <text-field placeholder="Enter your task" v-model="title"/>
        <div class="date-pick">
            <div>
                start date
            </div>
            <div>
                end date
            </div>
        </div>
        <button type="submit">Add</button>
    </form>
</template>

<script>
    import TextField from "./forms/TextField";
    import {useStore} from "vuex"
    import {ref} from "vue"

    export default {
        name: "TaskAdderWithoutTaskStatus",
        components: {
            TextField
        },
        setup() {
            const title = ref("");
            const store = useStore();
            const addNewTask = () => {
                store.dispatch("addNewTask", {
                    title: title.value,
                    completed: false
                });
                title.value = "";
            };
            return {
                title,
                addNewTask: addNewTask
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        height: 3rem;
        justify-content: space-between;
    }

    form > button {
        width: 5rem;
    }
    .date-pick{
        display: flex;
    }
</style>