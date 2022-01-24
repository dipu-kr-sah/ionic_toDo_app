<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent,onBeforeMount,onMounted } from 'vue';
import { useStore } from 'vuex'
import taskData from "./data/tasks"
import usersData from "./data/users"
import {BackgroundMode} from "@ionic-native/background-mode"


export default defineComponent({


  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  setup(){
      onMounted(()=>{
          BackgroundMode.enable()
      });
    const store = useStore();
    onBeforeMount(function () {
      store.dispatch("stateTaskSetter",taskData);
      store.dispatch("stateUsersSetter",usersData);
    })

  }
});
</script>