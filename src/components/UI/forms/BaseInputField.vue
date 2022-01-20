<template>
    <label>
        {{label}}
        <input v-model="handleInput" v-bind="$attrs">
    </label>
</template>

<script>
    import {computed} from "vue"
    export default {
        name: "BaseInputField",
        props:{
            label:{
                type:String,
            },
            modelValue:{
                type: undefined,
            },
        },
        emits:['update:modelValue'],
        setup(props,{emit}){

            const handleInput=computed({
                set(e) {
                    emit('update:modelValue',e);
                },
                get(){
                    return props.modelValue;
                }
            });
            return{
                handleInput:handleInput
            }
        }
    }
</script>

<style scoped>
    input{
        background: white;
    }
    label,input{
        width: 100%;
        height: 100%;
    }
</style>