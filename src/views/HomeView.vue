<template>
  <ion-icon :icon="menu" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { menu } from "ionicons/icons";

export default defineComponent({
  name: "HomeView",
  data(){
    return{
      menu,
    }
  }
});
</script>
