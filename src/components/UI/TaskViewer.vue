<template>
    <div class="card">
        <div>
            <check-box type="checkbox" v-model="isCompeted"/>
        </div>
        <div class="task-title" @click="isCompeted=!isCompeted">
            <ion-card-title>{{title}}</ion-card-title>
        </div>
        <div class="options">
            <IonIcon class="icons" :icon="icons.trash"  color='danger' @click="$emit('delete')"/>
            <IonIcon class="icons" :icon="icons.createOutline" @click="$emit('edit')"/>
        </div>
    </div>
</template>

<script>
    import {IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonCard, IonIcon} from "@ionic/vue"
    import CheckBox from "./forms/CheckBox";
    import {computed} from "vue"
    import {trash,createOutline} from "ionicons/icons"

    export default {
        name: "TaskViewer",
        emits:["delete","edit","update:completed"],
        props: {
            title: String,
            completed: {
                type: Boolean,
                required:true
            }
        },
        components: {
            CheckBox,
            IonCardHeader,
            IonCardContent,
            IonCardTitle,
            IonCardSubtitle,
            IonCard,
            IonIcon
        },
        setup(props, {emit}) {
            let isCompeted = computed({
                get() {
                    return props.completed;
                },
                set(e) {
                    emit("update:completed", e);
                }
            });
            return {
                isCompeted: isCompeted,
                icons:{trash,createOutline},

            }
        }
    }
</script>

<style scoped>
    .card {
        border: 1px solid gray;
        display: flex;
        height: 5rem;
        border-radius: 0.5rem;
        box-sizing: border-box;
        padding: 1rem;
        margin: 1rem;
        align-items: center;
    }

    .task-title {
        box-sizing: border-box;
        padding: 1rem;
        flex-grow: 1;
        user-select: none;
    }

    .options {
        width: max-content;
        display: flex;
        flex-direction: column;
        font-size: 1.3rem;
    }
    .icons:hover{
        transition: transform 1s;
        transform: scale(1.3,1.3);
    }
</style>