<template>
    <div>
        {{hoursPassed+':'}}{{minutesPassed+":"}}{{secondsPassed}}
        <ion-button @click="startTimer()" v-if="timerStatus===0 || timerStatus==2">
            <ion-icon :icon="icons.play"></ion-icon>
        </ion-button>
        <ion-button @click="pauseTimer()" v-if="timerStatus===1">
            <ion-icon :icon="icons.pause"></ion-icon>
        </ion-button>
        <ion-button @click="stopTimer()" v-if="timerStatus!==0">
            <ion-icon :icon="icons.stop"></ion-icon>
        </ion-button>
<!--        <ion-button @click="restart" v-if="timerStatus">-->
<!--            <ion-icon :icon="icons.refreshCircle"></ion-icon>-->
<!--        </ion-button>-->
    </div>
</template>

<script>
    import {IonIcon, IonButton} from "@ionic/vue"
    import {play, pause, stop,refreshCircle} from "ionicons/icons"
    import {ref} from "vue"

    export default {
        name: "Timer",
        props: {
            modelValue: {
                type: Number,
                required: true
            }
        },
        components: {
            IonIcon,
            IonButton
        },
        setup(props, {emit}) {
            const timeArr=props.modelValue.toString().split("."); // [0]hour, [1]min, [2]sec
            const hoursLeft = ref(timeArr[0]||0);
            const minutesLeft = ref(timeArr[1]||0);
            const secondsLeft = ref(timeArr[2]||0);
            const timerStatus = ref(0);
            let timer = null;
            function timerController() {
                if(secondsLeft.value===0 && minutesLeft.value===0 && hoursLeft.value===0){
                    // resetValuesOfTimer(0,0,0);
                    timerStatus.value=0;
                    return clearInterval(timer);
                }
                if(minutesLeft.value===0){
                    if(hoursLeft.value>0){
                        minutesLeft.value=60;
                    }
                    hoursLeft.value=Math.max(0,hoursLeft.value-1);
                }
                if(secondsLeft.value===0){
                    if(minutesLeft.value>0){
                        secondsLeft.value=60;
                    }
                    minutesLeft.value=Math.max(0,minutesLeft.value-1)
                }
                secondsLeft.value=Math.max(0,secondsLeft.value-1);
            }

            function startTimer() {
                if (timer) {
                    return
                }
                timer = setInterval(timerController, 1000);
                timerStatus.value = 1;
                emit("timerStarted");
            }


            function resetValuesOfTimer(hour=0,min=0,sec=0) {
                secondsLeft.value = sec;
                minutesLeft.value =min;
                hoursLeft.value = hour;
            }

            function stopTimer() {
                if (timer) {
                    resetValuesOfTimer(timeArr[0],timeArr[1],timeArr[2]);
                    clearInterval(timer);
                    timer = null;
                }
                timerStatus.value = 0;

                emit("timerStopped");
            }

            function pauseTimer() {
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                }
                timerStatus.value = 2;
            }

            function restart() {
                console.log("restart timer")
            }

            return {
                icons: {play, pause, stop,refreshCircle},
                startTimer,
                secondsPassed: secondsLeft,
                minutesPassed: minutesLeft,
                hoursPassed: hoursLeft,
                stopTimer,
                pauseTimer,
                timerStatus,
                restart

            }
        }
    }
</script>

<style scoped>

</style>