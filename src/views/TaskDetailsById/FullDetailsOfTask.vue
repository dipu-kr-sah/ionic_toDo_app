<template>
    <page-base-layout>
        <template v-slot:title>
            {{taskDetails.title}}
        </template>
        <template v-slot:content>
            <user-full-details :user-details="userDetails"/>
        </template>
    </page-base-layout>
</template>

<script>
    import {useStore}from "vuex"
    import  {useRoute} from "vue-router"
    import UserFullDetails from "../../components/UI/UserFullDetails";

    export default {
        name: "FullDetailsOfTask",
        components: {UserFullDetails},
        setup(){
            const store=useStore();
            const currentRoute=useRoute();
            const taskDetails=store.getters.getTaskById(currentRoute.params.taskId);

            return{
                taskDetails,
                userDetails:store.getters.getUserById(taskDetails.userId)
            }

        }
    }
</script>

<style scoped>

</style>