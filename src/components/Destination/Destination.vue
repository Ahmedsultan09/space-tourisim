<template>
  <div class="main">
    <Nav />
    <div class="content">
      <div class="left">
        <h1><span>01</span>PICK YOUR DESTINATION</h1>
        <img
          src="../../assets/destination/image-moon.png"
          alt=""
          v-show="destination === 'Moon'"
          class="dest-image"
        />
        <img
          src="../../assets/destination/image-mars.png"
          alt=""
          v-show="destination === 'Mars'"
          class="dest-image"
        />
        <img
          src="../../assets/destination/image-europa.png"
          alt=""
          v-show="destination === 'Europa'"
          class="dest-image"
        />
        <img
          src="../../assets/destination/image-titan.png"
          alt=""
          v-show="destination === 'Titan'"
          class="dest-image"
        />
      </div>
      <div class="right">
        <div class="btn-container">
          <button class="btn" @click="destination = 'Moon'">MOON</button>
          <button class="btn" @click="destination = 'Mars'">MARS</button>
          <button class="btn" @click="destination = 'Europa'">EUROPA</button>
          <button class="btn" @click="destination = 'Titan'">TITAN</button>
        </div>
        <div class="planet-name">
          <h1 v-show="destination === 'Moon'">MOON</h1>
          <h1 v-show="destination === 'Mars'">MARS</h1>
          <h1 v-show="destination === 'Europa'">EUROPA</h1>
          <h1 v-show="destination === 'Titan'">TITAN</h1>
        </div>
        <div class="planet-description">
          <p v-show="destination === 'Moon'">
            See our planet as you've never seen it before. A perfect Relaxing
            Trip Away to help regain prespectie and come back refreshed. While
            you're there, take in some history by visiting Luna 2 and Apollo 11
            landing sites
          </p>
          <p v-show="destination === 'Mars'">
            Don't Forget to pick your hiking boots. You'll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            its two and half times the size of Everest!
          </p>
          <p v-show="destination === 'Europa'">
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover's dream. With an icy surface, it's perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <p v-show="destination === 'Titan'">
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
        </div>
        <div class="break"></div>
        <div class="planet-details" v-show="destination === 'Moon'">
          <div class="distance">
            <div class="planet-text">AVG. DISTANCE</div>
            <div class="planet-info">{{ Moon.avgDistance }}</div>
          </div>
          <div class="time">
            <div class="planet-text">Est. travel time</div>
            <div class="planet-info">{{ Moon.estTime }}</div>
          </div>
        </div>
        <div class="planet-details" v-show="destination === 'Mars'">
          <div class="distance">
            <div class="planet-text">AVG. DISTANCE</div>
            <div class="planet-info">{{ Mars.avgDistance }}</div>
          </div>
          <div class="time">
            <div class="planet-text">Est. travel time</div>
            <div class="planet-info">{{ Mars.estTime }}</div>
          </div>
        </div>
        <div class="planet-details" v-show="destination === 'Europa'">
          <div class="distance">
            <div class="planet-text">AVG. DISTANCE</div>
            <div class="planet-info">{{ Europa.avgDistance }}</div>
          </div>
          <div class="time">
            <div class="planet-text">Est. travel time</div>
            <div class="planet-info">{{ Europa.estTime }}</div>
          </div>
        </div>
        <div class="planet-details" v-show="destination === 'Titan'">
          <div class="distance">
            <div class="planet-text">AVG. DISTANCE</div>
            <div class="planet-info">{{ Titan.avgDistance }}</div>
          </div>
          <div class="time">
            <div class="planet-text">Est. travel time</div>
            <div class="planet-info">{{ Titan.estTime }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../Nav/Nav.vue";
export default {
  data() {
    return {
      destination: "Moon",
      Moon: {
        avgDistance: "384,400 KM",
        estTime: "3 DAYS",
      },
      Mars: {
        avgDistance: "225 MIL. KM",
        estTime: "9 MONTHS",
      },
      Europa: {
        avgDistance: "628 MIL. KM",
        estTime: "3 YEARS",
      },
      Titan: {
        avgDistance: "1.6 BIL. KM",
        estTime: "7 YEARS",
      },
    };
  },
  components: {
    Nav,
  },
};
</script>

<style scoped>
.main {
  background: url("../../assets/destination/dest.webp") repeat;
  background-color: #0c0c10;
  background-size: unset;
  float: left;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  font-family: "Barlow Condensed", sans-serif;
  background-blend-mode: color-dodge;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80%;
  flex-direction: row;
  margin: 40px 100px;
  color: white;
}

.left {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.right {
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

h1 {
  color: white;
}

h1 span {
  margin-right: 30px;
  opacity: 25%;
}

.dest-image {
  margin: 100px;
}

.break {
  content: "";
  width: 100%;
  height: 1px;
  background-color: white;
  opacity: 50%;
}

.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 70%;
  height: 90px;
  gap: 40px;
}

.btn-container button {
  background-color: transparent;
  border: none;
  outline: none;
  width: calc((100%- 120px) / 4);
  height: fit-content;
  font-size: 32px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
  cursor: pointer;
  color: #d0d6f9;
  padding: 10px 0;
  transition: 0.3s;
}

.btn-container button:hover {
  border-bottom: 3px solid #d0d6f9;
  color: white;
}
.btn-container button:focus {
  border-bottom: 3px solid #d0d6f9;
  color: white;
}

.planet-name h1 {
  font-size: 9rem;
  margin: 0;
  padding: 0;
  font-family: "Bellefair", serif;
  font-weight: 400;
  color: #ffffff;
}
.planet-description {
  width: 80%;
  font-size: 20px;
  color: #d0d6f9;
  line-height: 32px;
}

.break {
  width: 80%;
  background-color: #383b4b;
}

.planet-details {
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.planet-text {
  color: #d0d6f9;
  font-size: 22px;
  margin-bottom: 15px;
}
.planet-info {
  font-size: 32px;
}

.btn-container .active {
  border-bottom: 3px solid #d0d6f9;
  color: white;
}
@media (max-width: 600px) {
  .main {
    max-width: 100%;
    min-height: 100vh;
    background: url("../../assets/destination/background-destination-mobile.jpg")
      no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 70%;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 80px;
    transform: translateY(80px);
  }

  .left {
    width: 100%;
    margin-bot: 0;
    height: 50%;
  }
  .right {
    width: 100%;
    height: 70%;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
  }

  .left h1 {
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin: 0;
  }

  .dest-image {
    width: 200px;
    height: 200px;
    margin: 30px 0;
  }

  .btn-container {
    max-width: 90%;
    margin: 0;
    gap: 0;
    width: 100%;
    height: auto;
  }

  .btn-container button {
    margin: 0 10px;
    font-size: 22px;
  }

  .planet-name h1 {
    font-size: 4rem;
  }

  .planet-description {
    align-items: center;
    padding-bottom: 10px;
  }
  .planet-description p {
    margin: 0;
    text-align: center;
  }

  .planet-details .distance,
  .time {
    text-align: center;
  }
  .planet-details {
    padding-top: 10px;
  }
}
</style>
