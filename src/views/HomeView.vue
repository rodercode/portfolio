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
    <section class="section-about full-bleed">
      <h2 class="headline-secondary">Hi, I'm Roder Snow. Nice to meet you.</h2>
      <p class="about-body">
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an advertising agency, a start-up, a student-led
        design studio, and a huge corporation.
      </p>
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
  margin-bottom: 3.2rem;
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

//////////////////////
// ABOUT SECTION
/////////////////////

.section-about {
  background-color: gray;
  padding: 4.8rem 0;

  .headline-secondary, .about-body{
    text-align: center;
    margin-bottom:1.6rem;
  }

  .headline-secondary {
    font-size: 2.4rem;
    color: #fff;
  }

  .about-body {
    font-size: 1.8rem;
  }
}

// UTILITY CLASSES
.full-bleed {
  box-shadow: 0 0 0 100vmax gray;
  clip-path: inset(0 -100vmax);
}

// GENERAL
.icon {
  height: 3.2rem;
  width: 3.2rem;
}
</style>
