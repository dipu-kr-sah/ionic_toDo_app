<template>
    <div>
<!--        <p>id:{{userDetails.id}}</p>-->
        <p>name: {{userDetails.name}}</p>
        <p>email: {{userDetails.email}}</p>
        <p>username: {{userDetails.username}}</p>
        <p>phone: {{userDetails.phone}}</p>
        <p>company name: {{userDetails.company.name}}</p>
        <p>company catch phrase: {{userDetails.company.catchPhrase}}</p>
        <p>website: {{userDetails.website}}</p>
    </div>
</template>

<script>
    export default {
        name: "UserFullDetails",
        props:{
            userDetails: {
                type:Object,
                required:true
            }
        }
    }
</script>

<style scoped>

</style>