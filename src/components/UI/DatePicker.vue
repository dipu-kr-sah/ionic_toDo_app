<template>
    <div>
        <ion-button @click="modalState=true">{{currentDate}}</ion-button>
        <ion-modal
                :is-open="modalState"
                :swipe-to-close="true"
                :presenting-element="$parent.$refs.ionRouterOutlet"
                @didDismiss="closeModal"
                :keyboardClose="true"
        >
            <ion-content>
                <div><ion-datetime presentation="date"/></div>

            <div>
                <button @click="closeModal">Close</button>
            </div>
            </ion-content>
        </ion-modal>
    </div>
</template>

<script>
    import BaseInputField from "./forms/BaseInputField";
    import {IonDatetime, IonButton, IonModal, IonContent} from "@ionic/vue"
    import {ref} from "vue"
    import Calendar from "./Calendar";

    export default {
        name: "DatePicker",
        components: {Calendar, BaseInputField, IonDatetime, IonButton, IonModal, IonContent},
        setup() {
            const modalState=ref(false);
            return {
                currentDate: ref(new Date().toISOString()),
                modalState,
                closeModal(){
                    modalState.value=false
                }
            }
        }
    }
</script>

<style scoped>

</style>