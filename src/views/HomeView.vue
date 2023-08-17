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
    <section class="section-hero">
      <h1 class="headline-primary">Frontend & WEB APP DEVELOPMENT</h1>
      <p class="hero-body">
        I build responsive, user-friendly and scalable webb-applications
      </p>
      <button class="btn">Say Hello</button>
    </section>
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
//////////////////////
// CONTAINER
/////////////////////
.home {
  padding: 3.2rem 1.6rem;
}
//////////////////////
// HEADER
/////////////////////
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  .nav-list {
    display: none;
  }
}

//////////////////////
// HERO SECTION
/////////////////////

.section-hero {
  border: 1px solid black;
  .headline-primary,
  .hero-body {
    margin-bottom: 3.2rem;
  }
  .headline-primary {
    font-size: 3rem;
  }
  .hero-body {
    font-size: 1.6rem;
  }
  .btn {
    width: 100%;
    background-color: gray;
    color: #fff;
    border: none;
    padding: 1.6rem 3.2rem;
    font-weight: 600;
  }
}

// GENERAL
.icon {
  height: 3.2rem;
  width: 3.2rem;
}
</style>
