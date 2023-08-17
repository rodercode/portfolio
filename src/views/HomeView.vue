<template>
  <div class="home">
    <header class="main-header">
      <div class="brand-logo">Roder.me</div>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="nav-link">About</li>
          <li class="nav-link">Project</li>
          <li class="nav-link">Contact</li>
        </ul>
      </nav>
      <div class="btn btn--menu">
        <ion-icon class="icon" :icon="menu" />
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { menu } from "ionicons/icons";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      menu,
    };
  },
});
</script>

<style lang="scss" scoped>

.home{
  padding: 3.2rem 1.6rem;
}
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  display: none;
}

.icon {
  height: 3.2rem;
  width: 3.2rem;
}
</style>
