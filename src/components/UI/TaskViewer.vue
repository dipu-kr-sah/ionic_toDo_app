<template>
    <div class="card">
        <div>
            <check-box v-model="isCompeted"></check-box>
        </div>
        <div class="task-title">
            <ion-card-title>{{title}}</ion-card-title>
        </div>
        <div class="options">

        </div>
    </div>
</template>

<script>
    import {IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonCard} from "@ionic/vue"
    import CheckBox from "./forms/CheckBox";
    import {computed} from "vue"
    import {trashOutline} from "ionicons/icons"

    export default {
        name: "TaskViewer",
        props: {
            title: String,
            completed: {
                type: Boolean,
                default: false
            }
        },
        components: {
            CheckBox,
            IonCardHeader,
            IonCardContent,
            IonCardTitle,
            IonCardSubtitle,
            IonCard
        },
        setup(props, {emit}) {
            const isCompeted = computed({
                get() {
                    return props.completed;
                },
                set(e) {
                    emit("update:completed", e);
                }
            });
            return {
                isCompeted: isCompeted,
            }
        }
    }
</script>

<style scoped>
    .card {
        border: 1px solid gray;
        display: flex;
        height: 4rem;
        border-radius: 0.5rem;
        box-sizing: border-box;
        padding: 1rem;
        margin: 1rem;
        align-items: center;
    }

    .task-title {
        box-sizing: border-box;
        padding: 1rem;
    }
    .options{
        width: max-content;
    }
</style>