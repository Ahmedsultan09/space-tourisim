<template>
  <div class="main">
    <Nav />
    <div class="content">
      <div class="page-title">
        <h1><span>03</span>SPACE LAUNCH 101</h1>
      </div>
      <div class="left" v-show="spaceShip === 'launchVheicle'">
        <div class="left-container">
          <div class="slider-buttons">
            <button
              class="btn active"
              @click="(spaceShip = 'launchVheicle'), (minNum = 0)"
            >
              1
            </button>
            <button
              class="btn"
              @click="(spaceShip = 'spacePort'), (minNum = 1)"
            >
              2
            </button>
            <button
              class="btn"
              @click="(spaceShip = 'spaceCapsule'), (minNum = 2)"
            >
              3
            </button>
          </div>
          <div class="left-content">
            <div class="term">THE TERMINOLOGY ...</div>
            <div class="title">LAUNCH VEHICLE</div>
            <div class="description">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </div>
          </div>
        </div>
      </div>
      <div class="left" v-show="spaceShip === 'spacePort'">
        <div class="left-container">
          <div class="slider-buttons">
            <button
              class="btn"
              @click="(spaceShip = 'launchVheicle'), (minNum = 0)"
            >
              1
            </button>
            <button
              class="btn active"
              @click="(spaceShip = 'spacePort'), (minNum = 1)"
            >
              2
            </button>
            <button
              class="btn"
              @click="(spaceShip = 'spaceCapsule'), (minNum = 2)"
            >
              3
            </button>
          </div>
          <div class="left-content">
            <div class="term">THE TERMINOLOGY ...</div>
            <div class="title">SPACEPORT</div>
            <div class="description">
              A spaceport or cosmodrome is a site for launching (or receiving)
              spacecraft, by analogy to the seaport for ships or airport for
              aircraft. Based in the famous Cape Canaveral, our spaceport is
              ideally situated to take advantage of the Earth's rotation for
              launch.
            </div>
          </div>
        </div>
      </div>
      <div class="left" v-show="spaceShip === 'spaceCapsule'">
        <div class="left-container">
          <div class="slider-buttons">
            <button
              class="btn"
              @click="(spaceShip = 'launchVheicle'), (minNum = 0)"
            >
              1
            </button>
            <button
              class="btn"
              @click="(spaceShip = 'spacePort'), (minNum = 1)"
            >
              2
            </button>
            <button
              class="btn active"
              @click="(spaceShip = 'spaceCapsule'), (minNum = 2)"
            >
              3
            </button>
          </div>
          <div class="left-content">
            <div class="term">THE TERMINOLOGY ...</div>
            <div class="title">SPACE CAPSULE</div>
            <div class="description">
              A space capsule is an often-crewed spacecraft that uses a
              blunt-body reentry capsule to reenter the Earth's atmosphere
              without wings. Our capsule is where you'll spend your time during
              the flight. It includes a space gym, cinema, and plenty of other
              activities to keep you entertained.
            </div>
          </div>
        </div>
      </div>
      <div class="right" v-show="spaceShip === 'launchVheicle'">
        <img
          src="../../assets\technology\image-launch-vehicle-portrait.jpg"
          alt=""
        />
      </div>
      <div class="right" v-show="spaceShip === 'spacePort'">
        <img
          src="../../assets\technology\image-spaceport-portrait.jpg"
          alt=""
        />
      </div>
      <div class="right" v-show="spaceShip === 'spaceCapsule'">
        <img
          src="../../assets\technology\image-space-capsule-portrait.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../Nav/Nav.vue";
export default {
  name: "Technology",
  components: {
    Nav,
  },
  data() {
    return {
      spaceShip: "launchVheicle",
      spaceShips: ["launchVheicle", "spacePort", "spaceCapsule"],
      minNum: 0,
      maxNum: 2,
      counterOne: null,
    };
  },
  methods: {
    generateCounter() {
      this.counterOne = setInterval(() => {
        if (this.minNum !== this.maxNum) {
          this.spaceShip = this.spaceShips[++this.minNum];
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
  background: url("../../assets/technology/dest.jpg");
  background-color: #0c0c10d6;
  background-size: cover;
  float: left;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  font-family: "Barlow Condensed", sans-serif;
  background-blend-mode: overlay;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 100px);
  height: calc(100% - 130px);
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
  /* justify-content: s; */
}

.right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
}

.page-title {
  width: auto;
  height: 20%;
  position: absolute;
  top: 150px;
}
h1 {
  color: white;
}

h1 span {
  margin-right: 30px;
  opacity: 0.25;
}

.left-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.slider-buttons {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 70%;
  gap: 40px;
  align-items: center;
  justify-content: center;
}
.slider-buttons .btn {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  outline: none;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.26);
  font-size: 32px;
  color: #ffff;
  font-family: "Bellefair", serif;
  cursor: pointer;
  transition: 0.3s;
}

.slider-buttons .btn:hover {
  border: 2px solid white;
}

.left-content {
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 50px;
}

.left-content .term {
  color: #d0d6f9;
  font-size: 18px;
  letter-spacing: 2.7px;
}

.left-content .title {
  font-size: 4rem;
  font-family: "Bellefair", serif;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 40px;
}

.left-content .description {
  color: #d0d6f9;
  line-height: 32px;
  font-size: 24px;
  max-width: 50ch;
  margin-bottom: 100px;
}
.slider-buttons .active {
  background-color: white;
  color: black;
}
@media (max-width: 600px) {
  .main {
    max-width: 100%;
    min-height: 100vh;
    background: url("../../assets/technology/background-technology-mobile.jpg")
      no-repeat;
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
    position: relative;
  }

  .slider-buttons {
    flex-direction: row;
    width: 100%;
    height: 30%;
  }
  .slider-buttons .btn {
    width: 60px;
    height: 60px;
  }
  .left-container {
    flex-direction: column;
    height: 100%;
  }

  .right img {
    width: 326px;
    height: 268px;
  }

  .page-title {
    top: 100px;
    left: 20px;
  }

  .left-content {
    width: 100%;
    height: 70%;
    justify-content: center;
    margin: 20px 0 0 0;
    align-items: center;
  }
  .left-content .title {
    font-size: 2rem;
    margin: 10px;
  }
  .left-content .description {
    font-size: 16px;
    margin-bottom: 0;
    max-width: 50ch;
    text-align: center;
  }
}
</style>
