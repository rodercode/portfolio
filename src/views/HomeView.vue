<template>
  <div class="home">
    <!-- HEADER -->
    <header class="main-header">
      <div class="brand-logo">
        <a href="#"> Roder.me </a>
      </div>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="nav-link">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-link">
            <a class="nav-link" href="#">Project</a>
          </li>
          <li class="nav-link">
            <a class="nav-link" href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="btn btn--menu">
        <ion-icon class="icon" :icon="menu" />
      </div>
    </header>
    <div class="container">
      <!-- HERO SECTION -->
      <section class="section-hero">
        <h1 class="headline-primary">Frontend & WEB APP DEVELOPMENT</h1>
        <p class="hero-body">
          I create web applications known for their responsiveness,
          user-friendliness, and scalability. With thoughtful design and
          advanced coding. I'm able to create a seamless user experience.
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

.container {
  display: grid;
  row-gap: 6.4rem;
}

//////////////////////
// HEADER
/////////////////////
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6.4rem;

  .brand-logo {
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .nav-list {
    display: none;
    .nav-link {
      font-size: 1.4rem;
    }
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
  text-align: center;
  padding: 8rem 0;
  height: 65vh;

  .hero-body {
    line-height: 1.7;
    margin-bottom: 3.2rem;
    font-size: 1.8rem;
  }
}

//////////////////////
// ABOUT SECTION
/////////////////////

.section-about {
  background-color: $primary-color;
  padding: 6.4rem 0;
  text-align: center;

  .headline-secondary {
    color: #fff;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 3.2rem;
  }
  .about-body {
    font-size: 1.8rem;
    line-height: 1.7;
    color: $light-color;
  }
}

//////////////////////
// Project Section
/////////////////////
.section-project {
  padding: 6.4rem 0;
  .headline-secondary {
    padding-bottom: 1.2rem;
    font-weight: 600;
    color: $grey-color-shade;
  }

  .headline-secondary,
  .project-item {
    border-bottom: 1px solid $under-line-color;
  }

  .project-item {
    // DISPLAY
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2.4rem;

    // BOX MODEL
    padding: 4.8rem 0;

    // TYPO
    text-align: center;
    .project-text-box {
      .project-title {
        font-size: 2rem;
        margin-bottom: 1.6rem;
        font-weight: 500;
        color: $grey-color-shade;
      }
      .project-body {
        margin-bottom: 3.2rem;
        line-height: 1.5;
      }
    }
  }
}

//////////////////////
// CONTACT SECTION
/////////////////////
.section-contact {
  margin-bottom: 1.6rem;
  .headline-secondary {
    margin-bottom: 3.2rem;
    font-weight: 600;
    line-height: 1.3;
    color: $grey-color-shade;
  }
  .contact-form {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.6rem;
    justify-content: space-between;

    .form-group {
      width: 100%;
      label {
        font-size: 1.4rem;
      }
      input {
        width: 100%;
        padding: 0.4rem 0.8rem;
        margin-top: 0.8rem;
      }
    }
    .form-group--message input {
      padding: 4.8rem 0;
    }

    .btn--submit {
      // TYPO
      color: #fff;
      font-weight: 600;

      // BOX MODEL
      width: 100%;
      background-color: $primary-color;
      font-weight: 600;
      border: none;
      padding: 1.2rem 2.4rem;
    }
  }
  .contact-link-list {
    display: flex;
    justify-content: center;
    gap: 4.8rem;
    margin-top: 4.8rem;
    font-size: 1.4rem;
  }
}

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
  font-weight: 700;
  line-height: 1.3;
  font-size: 3rem;
  margin-bottom: 1.6rem;
  color: $grey-color-shade;
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
  font-weight: 600;
  width: 100%;
  cursor: pointer;

  // BOX MODEL
  background-color: $primary-color;
  border: none;
  padding: 1.2rem 4.8rem;
}

//////////////////////
// MEDIA QUERIES
/////////////////////

// 648 px tablets
@media screen and (min-width: 34em) {
  .container {
    max-width: 45rem;
    margin: 0 auto;
  }
  .home {
    padding: 3.2rem 4.8rem;
  }

  .nav-list {
    display: flex !important;
    gap: 3.2rem;
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
  a {
    font-size: 1.5rem !important;
  }

  .container {
    max-width: 980px;
    row-gap: 12.8rem;
  }
  .main-header {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 12.8rem;
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

    .about-body {
      font-size: 1.7rem !important;
    }
  }

  // PROJECT SECTION
  .section-project {
    .project-item {
      grid-template-columns: 1fr 1fr;
      column-gap: 6.4rem;
      text-align: left;

      .project-text-box {
        align-self: center;

        .project-body {
          font-size: 1.5rem !important;
        }
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
        padding: 1.2rem 2.4rem;
        margin: 0 auto;
      }
    }
  }

  // GENERAL
  .btn-link {
    width: auto;
    padding: 1.2rem 2.4rem;
  }
}

@media screen and (min-width: 75em) {
  .container {
    max-width: 1200px;
  }

  .section-project {
    .project-img-box {
      width: 80%;
    }
  }
}
</style>
