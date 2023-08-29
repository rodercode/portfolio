<template>
  <header class="main-header flex justify-between">
    <div class="brand-logo">
      <a class="link uppercase" href="#"> Roder code </a>
    </div>
    <nav class="main-nav hidden sm:block">
      <ul class="link nav-list">
        <li class="link nav-link">
          <a class="link nav-link" href="#">About</a>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { menu } from "ionicons/icons";

export default defineComponent({
  name: "AppHeader",
});
</script>

<style lang="scss" scoped>
//////////////////////
// HEADER
/////////////////////
// .main-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-bottom: 6.4rem;

//   .brand-logo {
//     font-size: 1.4rem;
//     font-weight: 600;
//     text-transform: uppercase;
//   }

//   .nav-list {
//     display: none;
//     .nav-link {
//       font-size: 1.4rem;
//     }
//   }
//   .icon {
//     height: 3.2rem;
//     width: 3.2rem;
//   }
// }

// // 544 px huge phones
// @media screen and (min-width: 34em) {
//   .main-header {
//     .nav-list {
//       display: flex;
//       gap: 3.2rem;
//     }
//     .btn--menu {
//       display: none;
//     }
//   }
// }

// // 752 px tablets
// @media screen and (min-width: 47em) {
//   @media screen and (min-width: 60.5em) {
//     // MAIN HEADER
//     .main-header {
//       max-width: 1000px;
//       margin: 0 auto;
//       padding-bottom: 12.8rem;
//       .link {
//         font-size: 1.5rem;
//       }

//       .nav-list .nav-link {
//         font-size: 1.5rem;
//       }
//     }
//     // GENERAL
//     .btn-link {
//       width: auto;
//       padding: 1.2rem 2.4rem;
//     }
//   }
// }
</style>
