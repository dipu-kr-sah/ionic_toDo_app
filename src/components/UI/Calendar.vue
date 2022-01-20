<template>
    <div>
        {{year}}:{{month}}
    </div>
</template>

<script>
    const today_date=new Date();
    export default {
        name: "CalendarUI",
        props:{
            year:{
                type:Number,
                default:today_date.getFullYear()
            },
            month:{
                type:Number,
                default:today_date.getMonth()
            },
        }
    }
</script>

<style scoped>

</style>