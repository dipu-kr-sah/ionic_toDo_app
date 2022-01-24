<template>
    <div v-for="(task,index) in tasks" :key="index">
        <task-viewer
                class="cursor-pointer"
                :taskDetails="task"
                @delete="$emit('delete',index)"
                @update:completed="updateTask(task,'completed',$event,index)"
                @update:title="updateTask(task,'title',$event,index)"
                @startTimer="startTimer(index)"
                @pauseTimer="pauseTimer(index)"
                @stopTimer="stopTimer(index)"
        />

    </div>
</template>

<script>

    import TaskViewer from "../UI/TaskViewer";
    import {useStore} from "vuex";

    export default {
        name: "AllTaskList",
        components: {TaskViewer},
        props: {
            tasks: Array
        },
        emits:['taskUpdate',"delete","edit"],
        setup(props,{emit}) {
            const store=useStore();

            function updateTask(taskDetails,updateKey,newValue,index){
                taskDetails=taskDetails||{};
                taskDetails[updateKey]=newValue;
                emit("taskUpdate",{taskDetails,index})
            }
            function startTimer(index){
                store.dispatch("startTimer",index)
            }
            function pauseTimer(index){

                store.dispatch("pauseTimer",index)
            }
            function stopTimer(index){

                store.dispatch("stopTimer",index)
            }
            return {
                updateTask,
                startTimer,
                pauseTimer,
                stopTimer,
            }
        }
    }
</script>

<style scoped>
    .cursor-pointer {
        cursor: pointer;
    }

    /*.cursor-pointer:hover {*/
    /*    box-shadow: 1rem 1rem 1rem 1rem #c4c4c460;*/
    /*}*/
</style>