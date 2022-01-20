<template>
    <page-base-layout>
        <new-task-creator/>
    </page-base-layout>
</template>

<script>
    import NewTaskCreator from "../components/Layouts/NewTaskCreator";
    import PageBaseLayout from "../components/Layouts/PageBaseLayout";
    export default {
        name: "NewTask",
        components: {PageBaseLayout, NewTaskCreator}
    }
</script>

<style scoped>

</style>