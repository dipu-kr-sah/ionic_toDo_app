<template>
    <base-input-field  type="checkbox"
                     v-model="checkBoxModel"/>
</template>

<script>
    import BaseInputField from "./BaseInputField";
    import {computed} from "vue";
    export default {
        name: "CheckBox",
        components: {BaseInputField},
        props:{
            modelValue:{
                type:Boolean,
            }
        },
        emits:['update:modelValue'],
        setup(props,{emit}){

            const checkBoxModel=computed({
                get(){
                    return props.modelValue;
                },
                set(e){
                    emit('update:modelValue',e);
                }
            });
            return{
                checkBoxModel,
            }
        }
    }
</script>

<style scoped>
</style>