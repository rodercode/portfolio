<template>
  <div class="home">
    <!-- HEADER -->
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

    <!-- HERO SECTION -->
    <section class="section-hero">
      <h1 class="headline-primary">Frontend & WEB APP DEVELOPMENT</h1>
      <p class="hero-body">
        I build responsive, user-friendly and scalable webb-applications
      </p>
      <a class="btn-link">Say Hello</a>
    </section>

    <!-- ABOUT SECTION -->
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

    <!-- PROJECT SECTION -->
    <section class="section-project">
      <h2 class="headline-secondary">My Recent Projects</h2>
      <ul class="project-list">
        <li v-for="project in projectList" class="project-item">
          <div class="project-img-box">
            <img
              class="project-img"
              src="../assets/img/holding-picture.jpg"
              alt="picture of male holding a photo in his right hand"
            />
          </div>
          <div class="project-text-box">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-body">
              {{ project.text }}
            </p>
            <a class="btn-link">Viste</a>
          </div>
        </li>
      </ul>
    </section>

    <!-- Contact Section -->
    <section class="section-contact">
      <h2 class="headline-secondary">
        Thanks for taking your time to reach out
      </h2>
      <form class="contact-form">
        <div class="form-group">
          <label>Name</label>
          <input type="text" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" />
        </div>
        <div class="form-group form-group--message">
          <label>Message</label>
          <input type="text" />
        </div>
        <button class="btn">Get In Touch</button>
      </form>
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
      projectList: [
        {
          title: "Agyle Intelligence",
          text: "A platform for automating data collection and reporting throughout teams, operations and supply chains.",
        },
        {
          title: "Hal-Con",
          text: "Atlantic Canada's premier sci-fi and gaming convention. ",
        },
        {
          title: "Lady Slipper Cottages",
          text: "A platform for automating data collection and reporting throughout teams, operations and supply chains.",
        },
      ],
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
    text-align: center;
    margin-bottom: 3.2rem;
  }
}

//////////////////////
// ABOUT SECTION
/////////////////////

.section-about {
  background-color: gray;
  padding: 4.8rem 0;
  margin-bottom: 3.2rem;

  .headline-secondary,
  .about-body {
    text-align: center;
    margin-bottom: 1.6rem;
  }

  .headline-secondary {
    color: #fff;
  }

  .about-body {
    font-size: 1.8rem;
  }
}

//////////////////////
// Project Section
/////////////////////

.section-project {
  margin-bottom: 6.4rem;
  .headline-secondary {
    border-bottom: 1px solid black;
    padding-bottom: 8px;
  }
  .headline-secondary {
    margin-bottom: 1.6rem;
  }
  .project-item {
    // DISPLAY
    display: grid;
    grid-row: 1fr 1fr;
    grid-column: 1fr;
    row-gap: 1.6rem;

    // BOX MODEL
    border-bottom: 1px solid black;
    padding: 4.8rem 0;

    // TYPO
    text-align: center;

    .project-img-box {
      .project-img {
        background: gray;
        width: 100%;
        height: 100%;
      }
    }
    .project-text-box {
      .project-title {
        font-size: 2rem;
        margin-bottom: 1.6rem;
      }
      .project-body {
        margin-bottom: 3.2rem;
      }
    }
  }
}

//////////////////////
// CONTACT SECTION
/////////////////////
.section-contact {
  .headline-secondary {
    margin-bottom: 2.4rem;
  }
  .contact-form {
    .form-group {
      // DISPLAY
      display: flex;
      flex-direction: column;
      gap: 8px;

      // BOX MODEL
      margin-bottom: 1.6rem;

      input {
        width: 100%;
        padding: 0.4rem 0rem;
      }
    }
    .form-group--message {
      input {
        padding: 4.8rem 0;
      }
    }

    .btn {
      // TYPO
      color: #fff;
      font-weight: 600;

      // BOX MODEL
      width: 100%;
      background-color: gray;
      border: none;
      padding: 1.2rem 2.4rem;
    }
  }
}

//////////////////////
// UTILITY CLASSES
/////////////////////
.full-bleed {
  box-shadow: 0 0 0 100vmax gray;
  clip-path: inset(0 -100vmax);
}

//////////////////////
// GENERAL
/////////////////////
.headline-primary {
  font-size: 3rem;
}
.headline-secondary {
  font-size: 2.4rem;
  text-align: center;
}
.icon {
  height: 3.2rem;
  width: 3.2rem;
}
.btn-link {
  // DISPLAY
  display: inline-block;

  // TYPO
  text-align: center;
  color: #fff;
  font-weight: 600;

  // BOX MODEL
  width: 100%;
  background-color: gray;
  border: none;
  padding: 1.2rem 2.4rem;
}
</style>
