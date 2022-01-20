<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-back-button default-href="/" slot="start" v-if="currentRoute!=='/'" :text="backButtonText">
                </ion-back-button>
              <slot name="title">
              </slot>
<!--                <ion-button router-link="/new" slot="end" v-if="currentRoute!=='/new'">-->
<!--                    <ion-icon slot="icon-only" :icon="icons.addCircleOutline"></ion-icon>-->
<!--                </ion-button>-->
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot></slot>
            <slot name="content">
            </slot>
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonBackButton,IonIcon,IonButton} from "@ionic/vue";
    import {addCircleOutline} from "ionicons/icons"
    import {useRoute} from "vue-router"
    import {computed} from "vue"

    export default {
        name: "PageBaseLayout",
        components: {
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar,
            IonBackButton,
            IonIcon,
            IonButton
        },
        props:{
            backButtonText:{
                type:String,
                default:"Back"
            }
        },
        setup(){
            const route=useRoute();
            const currentRoute=computed(()=>{
                return route.fullPath
            })
            return{
                currentRoute:currentRoute,
                icons:{
                    addCircleOutline
                }
            }
        }
    }
</script>

<style scoped>
    .ion-page{
        background: white;
        height: 100%;
    }
    ion-header{
        box-sizing: border-box;
        padding:0 0.5rem 0 0.5rem;
    }
</style>