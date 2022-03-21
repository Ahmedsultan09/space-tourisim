<template>
  <div class="main">
    <Nav />
    <div class="content">
      <div class="left">
        <p class="first-p">SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <p class="second-p">
          Let's face it; if you want to go to spacem you might as well genuinely
          go to outer space and not hover kind of on the edge of it. well sit
          back, and relax because we'll give you a trulley out of this world
          experience!
        </p>
      </div>
      <div class="right">
        <button class="explore-btn">EXPLORE</button>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../Nav/Nav.vue";

export default {
  name: "Home",
  components: {
    Nav,
  },
  data() {
    return {
      activeTap: "Home",
    };
  },
};
</script>

<style scoped>
.main {
  background: url("../../assets/home/earth.webp") no-repeat;
  background-size: cover;
  float: left;

  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  font-family: "Barlow Condensed", sans-serif;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80%;
  flex-direction: row;
  margin: 0 100px;
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
  display: flex;
  justify-content: center;
}

.first-p {
  font-size: 38px;
  letter-spacing: 4px;

  color: #d0d6f9;
}
h1 {
  font-size: 10rem;
  font-weight: 400;
  font-family: "Bellefair", serif;
  margin: 0;
  /* max-width: 70%; */
}

.second-p {
  font-family: "Barlow", sans-serif;
  max-width: 70%;
  line-height: 25px;
  color: #d0d6f9;
}
.explore-btn {
  width: 274px;
  height: 274px;
  border-radius: 50%;
  font-size: 32px;
  letter-spacing: 2px;
  font-family: "Bellefair", serif;
  border: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
}

.explore-btn:hover {
  outline: 40px solid #9797977e;
}

@media (max-width: 600px) {
  .main {
    max-width: 100%;
    min-height: 100vh;
    background: url("../../assets/home/background-home-mobile.jpg") no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 70%;
    margin: 0;
    padding: 0;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 80px;
    transform: translateY(80px);
  }

  .left {
    width: 100%;
    margin-bottom: 40px;
    height: 50%;
  }
  .right {
    width: 100%;
    height: 50%;
    margin-top: 30px;
  }

  .first-p {
    font-size: 20px;
    width: 100%;
    text-align: center;
  }
  h1 {
    font-size: 5em;
  }

  .second-p {
    max-width: 100%;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
  }

  .explore-btn {
    width: 200px;
    height: 200px;
  }
}
@media (min-width: 600px) {
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
}
@media (min-width: 801px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
