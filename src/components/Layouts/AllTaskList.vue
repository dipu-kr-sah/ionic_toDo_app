<template>
    <div v-for="(task,index) in tasks" :key="index">
        <task-viewer
                class="cursor-pointer"
                :title="task.title"
                :completed="task.completed"
                @delete="$emit('delete',index)"
                @update:completed="updateTask(task,'completed',$event,index)"
        />

    </div>
</template>

<script>
    import TaskViewer from "../UI/TaskViewer";

    export default {
        name: "AllTaskList",
        components: {TaskViewer},
        props: {
            tasks: Array
        },
        emits:['taskUpdate',"delete","edit"],
        setup(props,{emit}) {
            function updateTask(taskDetails,updateKey,newValue,index){
                taskDetails=taskDetails||{};
                taskDetails[updateKey]=newValue;
                emit("taskUpdate",{taskDetails,index})
            }
            return {
                updateTask
            }
        }
    }
</script>

<style scoped>
    .cursor-pointer {
        cursor: pointer;
    }

    .cursor-pointer:hover {
        box-shadow: 1rem 1rem 1rem 1rem #c4c4c460;
    }
</style>