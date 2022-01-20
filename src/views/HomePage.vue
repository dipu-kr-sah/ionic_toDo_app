<template>
    <page-base-layout>
        <template v-slot:title>
            Task Manager
        </template>
        <template v-slot:content>
            <task-adder-without-task-status/>
            <div class="options-for-tasks">
                <div class="search-bar">
                    <text-field placeholder="Search for task by task title" v-model="searchString"/>
                </div>
                <div class="sort-filters">
                    <label>
                        sort by <select v-model="sortBySelected">
                        <option v-for="(value,key) in sortByOptions" :key="key" :value="value">{{camelCaseToNormalText(value)}}</option>
                    </select>
                    </label>
                </div>
            </div>

            <div class="task-list-container">
                <all-task-list @delete="deleteTask" @taskUpdate="updateStateTask" :tasks="tasksToRender"/>
            </div>
        </template>
    </page-base-layout>
</template>

<script>
    import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
    import AllTaskList from "../components/Layouts/AllTaskList";
    import TextField from "../components/UI/forms/TextField";
    import {defineComponent, computed, ref, watch} from 'vue';
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
            TaskAdderWithoutTaskStatus,
            TextField
        },
        setup() {
            const store = useStore();
            const searchString = ref("");
            const getStateAllTasks = computed({
                get() {
                    return store.getters.getAllTasks;
                },
                set(e) {
                    tasksToRender.value = e;
                }
            });
            const sortByOptions = ref(Object.keys(getStateAllTasks.value[0]));
            const sortBySelected = ref(sortByOptions.value[0]);
            const tasksToRender = ref([]);
            tasksToRender.value = getStateAllTasks.value;
            function camelCaseToNormalText(e) {
                return e.split(/(?=[A-Z])/).toString().replaceAll(","," ").toLowerCase()
            }
            function updateStateTask(e) {
                store.dispatch("updateTaskByIndex", e)
            }
            function deleteTask(e) {
                store.dispatch("deleteTaskByIndex", e)
            }
            watch(searchString, (nv) => {
                tasksToRender.value = getStateAllTasks.value.filter((el) => {
                    return el.title.includes(searchString.value)
                });
                return nv;

            });
            watch(sortBySelected, (nv) => {
                store.dispatch("sortByUsingKey", nv);
                return nv;

            });
            return {
                tasksToRender: tasksToRender,
                updateStateTask: updateStateTask,
                deleteTask,
                searchString,
                sortByOptions,
                sortBySelected,
                camelCaseToNormalText
            }
        }
    });
</script>

<style scoped>

    .task-list-container {
        height: 100%;
        overflow-y: scroll;
    }

    .search-bar {
        height: 3rem;
    }

    .options-for-tasks {
        min-height: 5rem;
        display: flex;
        flex-direction: column;
    }
</style>