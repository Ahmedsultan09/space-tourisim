<template>
  <div class="main">
    <Nav />
    <div class="page-title">
      <h1><span>02</span>MEET YOUR CREW</h1>
    </div>
    <div class="content">
      <div class="left">
        <div class="astronaut" v-show="astronaut === 'Douglas'">
          <div class="title">COMMANDER</div>
          <div class="name">DOUGLAS HURLEY</div>
          <div class="info">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </div>
          <div class="dots">
            <button
              class="sliders active"
              @click="(astronaut = 'Douglas'), (minNum = 0)"
            ></button>
            <button
              class="sliders"
              @click="(astronaut = 'Mark'), (minNum = 1)"
            ></button>
            <button
              class="sliders"
              @click="(astronaut = 'Victor'), (minNum = 2)"
            ></button>
            <button
              class="sliders"
              @click="(astronaut = 'Anousheh'), (minNum = 3)"
            ></button>
          </div>
        </div>
        <div class="astronaut" v-show="astronaut === 'Mark'">
          <div class="title">MISSION SPECIALIST</div>
          <div class="name">MARK SHUTTLEWORTH</div>
          <div class="info">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </div>
          <div class="dots">
            <button
              class="sliders"
              @click="(astronaut = 'Douglas'), (minNum = 0)"
            ></button>
            <button
              class="sliders active"
              @click="(astronaut = 'Mark'), (minNum = 1)"
            ></button>
            <button
              class="sliders"
              @click="(astronaut = 'Victor'), (minNum = 2)"
            ></button>
            <button
              class="sliders"
              @click="(astronaut = 'Anousheh'), (minNum = 3)"
            ></button>
          </div>
        </div>
        <div class="astronaut" v-show="astronaut === 'Victor'">
          <div class="title">PILOT</div>
          <div class="name">VICTOR GLOVER</div>
          <div class="info">
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </div>
          <div class="dots">
            <button
              class="sliders"
              @click="(astronaut = 'Douglas'), (minNum = 0)"
            ></button>
            <button
              class="sliders"
              @click="(astronaut = 'Mark'), (minNum = 1)"
            ></button>
            <button
              class="sliders active"
              @click="(astronaut = 'Victor'), (minNum = 2)"
            ></button>
            <button
              class="sliders"
              @click="(astronaut = 'Anousheh'), (minNum = 3)"
            ></button>
          </div>
        </div>
        <div class="astronaut" v-show="astronaut === 'Anousheh'">
          <div class="title">FLIGHT ENGINEER</div>
          <div class="name">ANOUSHEH ANSARI</div>
          <div class="info">
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </div>
          <div class="dots">
            <button
              class="sliders"
              @click="(astronaut = 'Douglas'), (minNum = 0)"
            ></button>
            <button
              class="sliders"
              @click="(astronaut = 'Mark'), (minNum = 1)"
            ></button>
            <button
              class="sliders"
              @click="(astronaut = 'Victor'), (minNum = 2)"
            ></button>
            <button
              class="sliders active"
              @click="(astronaut = 'Anousheh'), (minNum = 3)"
            ></button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="astronaut-image" v-show="astronaut === 'Douglas'">
          <img src="../../assets\crew\image-douglas-hurley.png" alt="" />
        </div>
        <div class="astronaut-image" v-show="astronaut === 'Mark'">
          <img src="../../assets\crew\image-mark-shuttleworth.png" alt="" />
        </div>
        <div class="astronaut-image" v-show="astronaut === 'Victor'">
          <img src="../../assets\crew\image-victor-glover.png" alt="" />
        </div>
        <div class="astronaut-image" v-show="astronaut === 'Anousheh'">
          <img src="../../assets\crew\image-anousheh-ansari.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../Nav/Nav.vue";
export default {
  name: "Crew",
  components: {
    Nav,
  },
  data() {
    return {
      astronaut: "Douglas",
      astroNames: ["Douglas", "Mark", "Victor", "Anousheh"],
      choseenAstro: "",
      minNum: 0,
      maxNum: 3,
      counterOne: null,
    };
  },
  methods: {
    generateCounter() {
      this.counterOne = setInterval(() => {
        if (this.minNum !== this.maxNum) {
          this.astronaut = this.astroNames[++this.minNum];
        } else {
          this.minNum = -1;
        }
      }, 5000);
    },
  },
  mounted: function () {
    this.generateCounter();
  },
  watch: {
    minNum(newValue, oldValue) {
      if (newValue !== oldValue) {
        clearInterval(this.counterOne);
        this.generateCounter();
      }
    },
  },
};
</script>

<style scoped>
.main {
  background: url("../../assets/crew/606508974.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* float: left; */
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  font-family: "Barlow Condensed", sans-serif;
  image-rendering: pixelated;
  -ms-interpolation-mode: nearest-neighbor;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: calc(100% - 152px - 20%);
  flex-direction: row;
  margin-left: 100px;
  margin-right: 100px;
  color: white;
}
.left {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.page-title {
  width: 50%;
  height: 20%;
  margin-left: 6%;
}
h1 {
  color: white;
}

h1 span {
  margin-right: 30px;
  opacity: 25%;
}

.astronaut {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 80%;
}

.title {
  font-size: 38px;
  opacity: 60%;
  font-family: "Bellefair", serif;
}

.name {
  font-size: 3.5rem;
  font-family: "Bellefair", serif;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 50px;
}

.info {
  color: #d0d6f9;
  line-height: 32px;
  font-size: 24px;
  max-width: 50ch;
  margin-bottom: 100px;
}

.dots {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
  gap: 40px;
}

.sliders {
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: #97979748;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}

.active {
  background-color: white;
}

@media (max-width: 600px) {
  .main {
    max-width: 100%;
    min-height: 100vh;
    background: url("../../assets/crew/background-crew-mobile.jpg") no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .content {
    width: 100%;
    height: 70%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column-reverse;
  }

  .right {
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
  }
  .left {
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-align: center;
  }
  .astronaut {
    justify-content: center;
    align-items: center;
  }
  .astronaut-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    border-bottom: 1px solid #97979748;
  }
  .astronaut-image img {
    width: 270px;
    height: 270px;
  }
  .name {
    font-size: 2rem;
    margin: 0;
  }

  .page-title {
    margin-top: 30%;
    width: auto;
  }

  .title {
    font-size: 1rem;
  }

  .info {
    font-size: 1rem;
    margin: 20px 0;
  }

  .dots {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 40px;
  }
}
</style>
