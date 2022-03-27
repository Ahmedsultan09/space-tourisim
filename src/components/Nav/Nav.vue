<template>
  <nav v-show="!mobile">
    <div class="logo"><img src="../../assets/shared/logo.svg" alt="" /></div>
    <div class="line"></div>
    <div class="background"></div>
    <div class="links">
      <ul>
        <li>
          <router-link
            @click.prevent="activeTap = 'Home'"
            @click="activeClass"
            id="0"
            to="/"
            >00 Home</router-link
          >
        </li>
        <li>
          <router-link
            @click.prevent="activeTap = 'Destination'"
            @click="activeClass"
            to="/destination"
            id="1"
            >01 DESTINATION</router-link
          >
        </li>
        <li>
          <router-link
            @click.prevent="activeTap = 'Crew'"
            @click="activeClass"
            to="/crew"
            id="2"
            >02 CREW</router-link
          >
        </li>
        <li>
          <router-link
            @click.prevent="activeTap = 'Technology'"
            to="/technology"
            @click="activeClass"
            id="3"
            >03 TECHNOLOGY</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
  <div>
    <div class="nav-bars" v-show="mobile" @click="changeToggle"></div>
    <div class="mobile-logo" v-show="mobile">
      <img src="../../assets/shared/logo.svg" alt="" />
    </div>

    <nav v-show="toggleNav" class="mobile-nav">
      <div class="nav-bars" v-show="mobile" @click="changeToggle"></div>

      <div class="mobile-links" v-show="toggleNav">
        <ul>
          <li>
            <router-link
              @click.prevent="activeTap = 'Home'"
              @click="activeClass"
              id="0"
              to="/"
              >00 Home</router-link
            >
          </li>
          <li>
            <router-link
              @click.prevent="activeTap = 'Destination'"
              @click="activeClass"
              to="/destination"
              id="1"
              >01 DESTINATION</router-link
            >
          </li>
          <li>
            <router-link
              @click.prevent="activeTap = 'Crew'"
              @click="activeClass"
              to="/crew"
              id="2"
              >02 CREW</router-link
            >
          </li>
          <li>
            <router-link
              @click.prevent="activeTap = 'Technology'"
              to="/technology"
              @click="activeClass"
              id="3"
              >03 TECHNOLOGY</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {},
  data() {
    return {
      activeTap: "",
      mobile: null,
      toggleNav: false,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.changeScreen);
  },
  mounted() {
    this.changeScreen();
  },
  methods: {
    activeClass: function (e) {
      const links = document.querySelectorAll("router-link");
      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    },
    changeToggle: function () {
      if (this.toggleNav === true) {
        this.toggleNav = false;
      } else if (this.toggleNav === false) {
        this.toggleNav = true;
      }
    },
    changeScreen: function () {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    },
  },
};
</script>

<style>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 90px;
  align-items: center;
  position: relative;
  margin-top: 40px;
}
.logo {
  margin-left: 50px;
  cursor: pointer;
}
.links {
  width: 55%;
  height: 90px;
  background-color: rgba(255, 255, 255, 0.034);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0;
}
li {
  list-style: none;
  width: 25%;
  height: 90px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
li a {
  width: fit-content;
  height: 95%;
  text-decoration: none;
  font-size: 18px;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  text-align: center;
  color: white;
  letter-spacing: 3px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  border-bottom: 3px solid transparent;
}

li a:hover {
  border-color: #979797;
}

.line {
  content: "";
  position: absolute;
  width: 35%;
  height: 1px;
  left: 12%;
  background-color: white;
  z-index: 2;
  opacity: 0.5;
}
.router-link-active {
  border-bottom: 3px solid white;
}

.nav-bars {
  content: "";
  width: 25px;
  height: 4px;
  background-color: white;
  position: absolute;
  padding: 0;
  right: 30px;
  top: 50px;
}

.nav-bars::before {
  content: "";
  width: 25px;
  height: 4px;
  background-color: white;
  position: absolute;
  right: 20px;
  top: 10px;
  transform: translateX(20px);
}
.nav-bars::after {
  content: "";
  width: 25px;
  height: 4px;
  background-color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  transform: translateX(20px);
}

.mobile-nav {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.034);
  backdrop-filter: blur(20px);
  top: 0;
  margin: 0;
  right: 0;
  width: 70%;
  height: 100%;
  z-index: 99;
}

.mobile-logo {
  position: absolute;
  left: 30px;
  top: 40px;
}

.mobile-links {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute;
  top: 100px;
  left: 30px;
}

.mobile-links ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  max-height: 100%;
  padding: 0;
}

.mobile-links ul li {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
</style>
