<template>
    <div class="task-viewer">
        <div class="card">
            <div>
                <check-box type="checkbox" v-model="isCompeted"/>
            </div>
            <div class="task-title" @click="isCompeted=!isCompeted">
                <ion-card-title>{{taskDetails.title}}</ion-card-title>
            </div>
            <div class="options">
                <IonIcon class="icons" :icon="icons.trash" color='danger' @click="$emit('delete')"/>
                <IonIcon class="icons" :icon="icons.createOutline" @click="$emit('edit')"/>
            </div>

        </div>
        <div>
            <timer :model-value="parseFloat(taskDetails.timeRequiredToCompleteInHours)"/>

        </div>
    </div>
</template>

<script>
    import {IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonCard, IonIcon} from "@ionic/vue"
    import CheckBox from "./forms/CheckBox";
    import {computed} from "vue"
    import {trash, createOutline, play} from "ionicons/icons"
    import Timer from "./Timer";

    export default {
        name: "TaskViewer",
        emits: ["delete", "edit", "update:completed"],
        props: {
            taskDetails: Object
        },
        components: {
            Timer,
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
                    return props.taskDetails.completed;
                },
                set(e) {
                    emit("update:completed", e);
                }
            });
            return {
                isCompeted: isCompeted,
                icons: {trash, createOutline, play},

            }
        }
    }
</script>

<style scoped>
    .task-viewer {
        display: flex;
        flex-direction: column;


    }

    .task-viewer:hover {
        box-shadow: 1rem 1rem 1rem 1rem #c4c4c460;

    }

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

    .icons:hover {
        transition: transform 1s;
        transform: scale(1.3, 1.3);
    }
</style>