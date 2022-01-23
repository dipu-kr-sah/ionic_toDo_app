<template>
    <div>
        {{modelValue}}
        {{hoursPassed}}:{{minutesPassed}}:{{secondsPassed}}
        <ion-button @click="startTimer" v-if="timerStatus===0 || timerStatus==2">
            <ion-icon :icon="icons.play"></ion-icon>
        </ion-button>
        <ion-button @click="pauseTimer" v-if="timerStatus===1">
            <ion-icon :icon="icons.pause"></ion-icon>
        </ion-button>
        <ion-button @click="stopTimer" v-if="timerStatus!==0">
            <ion-icon :icon="icons.stop"></ion-icon>
        </ion-button>
    </div>
</template>

<script>
    import {IonIcon, IonButton} from "@ionic/vue"
    import {play, pause, stop} from "ionicons/icons"
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
            const hoursPassed = ref(timeArr[0]||0);
            const minutesPassed = ref(timeArr[1]||0);
            const secondsPassed = ref(timeArr[2]||0);
            const timerStatus = ref(0);
            let timer = null;

            function timerController() {
                if(secondsPassed.value===0 && minutesPassed.value===0){
                    console.log("time over");
                    stopTimer();
                }
                secondsPassed.value--;
                if (secondsPassed.value <= 0) {
                    minutesPassed.value=Math.max(minutesPassed.value-1,0);
                    if(minutesPassed.value<=0 && hoursPassed.value<=0){
                        return stopTimer()
                    }
                    secondsPassed.value = 59;
                }
                if (minutesPassed.value <= 0) {
                    hoursPassed.value=Math.max(hoursPassed.value-1,0);
                    minutesPassed.value=Math.max(minutesPassed.value-1,0);
                }
            }

            function startTimer() {
                if (timer) {
                    return
                }
                timer = setInterval(timerController, 1000);
                timerStatus.value = 1;
                emit("timerStarted");
            }

            function stopTimer() {
                if (timer) {
                    secondsPassed.value = timeArr[2]||0;
                    minutesPassed.value =timeArr[1]|| 0;
                    hoursPassed.value =timeArr[0]|| 0;
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

            return {
                icons: {play, pause, stop},
                startTimer,
                secondsPassed,
                minutesPassed,
                hoursPassed,
                stopTimer,
                pauseTimer,
                timerStatus

            }
        }
    }
</script>

<style scoped>

</style>