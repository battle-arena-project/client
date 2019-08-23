<template>
  <b-navbar type="dark" variant="dark" class="navbar-section">
    <b-navbar-nav>
      <b-nav-item href="#">BATTLE 8</b-nav-item>
    </b-navbar-nav>
    <img src="../assets/bglogo.png" alt="" srcset="">
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
.navbar-section {
  background: linear-gradient(90deg, red, yellow,red);
  box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.438);
  z-index: 0;
  font-family: 'Permanent Marker', cursive;
}
.navbar-section{
  justify-content: center;
  padding: 0;
  position: relative;
  width: 100%;
  height: 40px;
  z-index: 3;
}
.navbar-section a{
  text-align: center;
  font-size: 24pt;
  color: #ca0000 !important;
  padding: 5px;
  margin: 0;
  -webkit-text-stroke: 1px rgb(253, 245, 199);
  text-shadow: -2px -2px 0 red,
     0   -2px 0 red,
     2px -2px 0 red,
     2px  0   0 red,
     2px  2px 0 red,
     0    2px 0 red,
    -2px  2px 0 red,
    -2px  0   0 red;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.navbar-section img{
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 200px;
  z-index: 19;
}
</style>