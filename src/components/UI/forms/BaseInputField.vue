<template>
    <label>
        {{label}}
        <input v-model="handleInput" v-bind="$attrs" ref="ip">
    </label>
</template>

<script>
    import {computed,ref,onMounted} from "vue"
    export default {
        name: "BaseInputField",
        props:{
            label:{
                type:String,
            },
            modelValue:{
                type: undefined,
            },
            focus:Boolean
        },
        emits:['update:modelValue'],
        setup(props,{emit}){
            const ip=ref(null);
            onMounted(()=>{

            });
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