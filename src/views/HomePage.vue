<template>
    <page-base-layout>
        <template v-slot:title>
            Home Page
        </template>
        <template v-slot:content>
            <task-adder-without-task-status/>
            <div class="task-list-container">
                <all-task-list @taskUpdate="updateStateTask" :tasks="allStateTasks"/>
            </div>
        </template>
    </page-base-layout>
</template>

<script>
    import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
    import AllTaskList from "../components/Layouts/AllTaskList";
    import {defineComponent, computed} from 'vue';
    import {useStore} from "vuex"
    import TaskAdderWithoutTaskStatus from "../components/UI/TaskAdderWithoutTaskStatus";

    export default defineComponent({
        components: {
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar,
            AllTaskList,
            TaskAdderWithoutTaskStatus
        },
        setup() {
            const store = useStore();
            const getStateAllTasks = computed(() => {
                return store.getters.getAllTasks;
            });
            function updateStateTask(e) {
                store.dispatch("updateTaskByIndex",e)
            }
            return {
                allStateTasks: getStateAllTasks,
                updateStateTask
            }
        }
    });
</script>

<style scoped>

    .task-list-container {
        height: 100%;
        overflow-y: scroll;
    }
</style>