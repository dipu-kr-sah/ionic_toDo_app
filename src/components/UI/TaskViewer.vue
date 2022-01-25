<template>
    <div class="task-viewer">
        <div class="card">
            <div style="height: 100%">
                <check-box type="checkbox" v-model="isCompeted"/>
            </div>
            <div class="task-title" @click="(!editing)?isCompeted=!isCompeted:''">
                <ion-card-title>
                    <span v-if="editing">
                        <text-field v-model="editingTitle" :focus="true" />
                    </span>
                    <span v-else>
                        {{taskDetails.title}}
                    </span>
                </ion-card-title>
            </div>
            <div class="options">
                <IonIcon class="icons" :icon="icons.trash" color='danger' @click="$emit('delete')"/>
                <IonIcon class="icons" v-if="editing" :icon="icons.checkmarkDoneCircle" @click="editing=false"/>
                <IonIcon class="icons" v-else :icon="icons.createOutline" @click="editing=true"/>
            </div>

        </div>
        <div>
            <ion-button @click="$emit('startTimer')">
                start
            </ion-button>
            <ion-button @click="$emit('pauseTimer')" >
                pause
            </ion-button>
            <ion-button @click="$emit('stopTimer')" >
                stop
            </ion-button>
           {{timeRemaining}}

        </div>
    </div>
</template>

<script>
    import {IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonCard, IonIcon,IonButton,IonInput} from "@ionic/vue"
    import CheckBox from "./forms/CheckBox";
    import {computed,ref,watch} from "vue"
    import {trash, createOutline, play,checkmarkDoneCircle} from "ionicons/icons"
    import Timer from "./Timer";
    import TextField from "./forms/TextField";

    export default {
        name: "TaskViewer",
        emits: ["delete", "edit", "update:completed", "update:title","startTimer" ,"pauseTimer" ,"stopTimer"],
        props: {
            taskDetails: Object,
        },
        components: {
            TextField,
            Timer,
            CheckBox,
            IonCardHeader,
            IonCardContent,
            IonCardTitle,
            IonCardSubtitle,
            IonCard,
            IonIcon,
            IonButton,
            IonInput
        },
        setup(props, {emit}) {
            const titleTextFieldRef=ref(null);
            let isCompeted = computed({
                get() {
                    return props.taskDetails.completed;
                },
                set(e) {
                    emit("update:completed", e);
                }
            });
            const editingTitle=computed({
                get(){
                    return props.taskDetails.title
                },
                set(e){
                    emit("update:title",e);
                }
            });
            const editing=ref(false);
            const timeRemaining=computed(()=>{

                const hoursRequired=props.taskDetails.timeRequired.hours;
                const minutesRequired=props.taskDetails.timeRequired.minutes;
                const secondsRequired=props.taskDetails.timeRequired.seconds;
                const hoursElapsed=props.taskDetails.timeElapsed.hours;
                const minutesElapsed=props.taskDetails.timeElapsed.minutes;
                const secondsElapsed=props.taskDetails.timeElapsed.seconds;

                let secondsRemaining=secondsElapsed-59;
                const hoursRemaining=Math.max(hoursRequired-hoursElapsed-1,0);
                const minutesRemaining=Math.max(minutesRequired-minutesElapsed-1,0);

                if(secondsRemaining===-59 && minutesRemaining>0){
                    secondsRemaining=0;
                }else{
                    secondsRemaining=Math.abs(secondsRemaining)
                }
                return `${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`
            });

            return {
                isCompeted: isCompeted,
                icons: {trash, createOutline, play,checkmarkDoneCircle},
                timeRemaining,
                editing,
                editingTitle,
                titleTextFieldRef
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
        min-height: 5rem;
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