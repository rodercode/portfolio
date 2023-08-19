<template>
  <div class="home">
    <div class="container">
      
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
        <h2 class="headline-secondary">Hi, I'm Roder. Nice to meet you.</h2>
        <p class="about-body">
          I'm Roder Snow, a passionate frontend development student with a love
          for crafting engaging and user-friendly web experiences. Through this
          portfolio, I'm excited to showcase some of my best projects, skills,
          and journey in the world of frontend development.
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
          <div class="form-group form-group--name">
            <label>Name</label>
            <input type="text" />
          </div>
          <div class="form-group form-group--password">
            <label>Password</label>
            <input type="password" />
          </div>
          <div class="form-group form-group--message">
            <label>Message</label>
            <input type="text" />
          </div>
          <button class="btn--submit">Get In Touch</button>
        </form>
        <ul class="contact-link-list">
          <li>
            <a
              class="contact-link"
              href="https://www.linkedin.com/in/marcus-groth-3684a1259/"
              >LinkedIn</a
            >
          </li>
          <li><a class="footer-link" href="http://gmail.com/">Gmail</a></li>
          <li>
            <a class="footer-link" href="https://github.com/rodercode"
              >GitHub</a
            >
          </li>
        </ul>
      </section>
    </div>
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
// how to import styles from node_modules
@import "../assets/sass/main.scss";
.home {
  padding: 1.6rem 2.4rem;
}

//////////////////////
// CONTAINER
/////////////////////
.container {
  display: grid;
  row-gap: 8rem;
}

//////////////////////
// HEADER
/////////////////////
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand-logo {
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .nav-list {
    display: none;
  }
  .icon {
    height: 3.2rem;
    width: 3.2rem;
  }
}

//////////////////////
// HERO SECTION
/////////////////////

.section-hero {
  margin-bottom: 3.2rem;
  text-align: center;
  padding: 6.4rem 0;

  .headline-primary {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.6rem;
    color: $grey-color-shade;
  }

  .hero-body {
    line-height: 1.6;
    margin-bottom: 3.2rem;
  }
}

//////////////////////
// ABOUT SECTION
/////////////////////

.section-about {
  background-color: $primary-color;
  padding: 6.4rem 0;
  margin-bottom: 3.2rem;
  text-align: center;

  .headline-secondary {
    color: #fff;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 3.2rem;
  }
  .about-body {
    font-size: 1.8rem;
    line-height: 1.6;
    color: $light-color;
  }
}

//////////////////////
// Project Section
/////////////////////
.section-project {
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
    grid-template-columns: 1fr;
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
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.6rem;
    justify-content: space-between;

    .form-group {
      width: 100%;
      input {
        width: 100%;
        padding: 0.4rem 0rem;
        margin-top: 0.8rem;
      }
    }
    .form-group--message {
      width: 100%;
      input {
        padding: 4.8rem 0;
      }
    }

    .btn--submit {
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
  .contact-link-list {
    display: flex;
    justify-content: center;
    gap: 4.8rem;
    margin-top: 3.2rem;
  }
}

//////////////////////
// Footer
/////////////////////

//////////////////////
// UTILITY CLASSES
/////////////////////
.full-bleed {
  box-shadow: 0 0 0 100vmax $primary-color;
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
.btn-link {
  // DISPLAY
  display: inline-block;

  // TYPO
  text-align: center;
  color: #fff;
  font-weight: 700;
  width: 100%;

  // BOX MODEL
  background-color: $primary-color;
  border: none;
  padding: 1.2rem 4.8rem;
}

//////////////////////
// MEDIA QUERIES
/////////////////////

// 648 px
@media screen and (min-width: 34em) {
  .container {
    max-width: 450px;
    margin: 0 auto;
  }

  .home {
    padding: 3.2rem 4.8rem;
  }

  .nav-list {
    display: flex !important;
    gap: 2.4rem;
  }

  .btn--menu {
    display: none;
  }
}

// 752 px
@media screen and (min-width: 47em) {
  .container {
    gap: 9.6rem;
  }

  .form-group {
    width: 45% !important;
  }
  .form-group--message {
    width: 100% !important;
  }
}

// Desktop size 968px
@media screen and (min-width: 60.5em) {
  // CONTAINER
  .container {
    max-width: 75rem;
    row-gap: 12.8rem;
  }

  // HERO SECTION
  .section-hero {
    text-align: left;
    width: 55%;
    margin: 0 auto;
  }

  // ABOUT SECTION
  .section-about {
    width: 60%;
    margin: 0 auto;
  }

  // PROJECT SECTION
  .section-project {
    .project-item {
      grid-template-columns: 1fr 1fr;
      column-gap: 6.4rem;
      text-align: left;

      .project-text-box {
        align-self: center;
      }
    }
  }

  // CONTACT SECTION
  .section-contact {
    width: 60%;
    margin: 0 auto;
    .contact-form {
      .btn--submit {
        width: auto;
        padding: 0.8rem 2.4rem;
        margin: 0 auto;
      }
    }
  }

  // GENERAL
  .btn-link {
    width: auto;
    padding: 0.8rem 2.4rem;
  }
}

// 1256 px
@media screen and (min-width: 78.5em) {
  .container {
    max-width: 1100px;
  }
  .section-project {
    .project-img {
      width: 80% !important;
    }
  }
}
</style>
