<template>
   <base-input-field v-bind="$attrs" type="text"/>
</template>

<script>
    import BaseInputField from "./BaseInputField";
    export default {
        name: "TextField",
        components: {BaseInputField},
        setup(){

            return{
            }
        }
    }
</script>

<style scoped>

</style>