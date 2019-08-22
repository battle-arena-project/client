<template>
  <div id="time-container">
    <h2>Time</h2>
    <div id="time"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#time-container{
  position: absolute;
  width: 400px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-color: rgba(255, 51, 51, 0.315);
  border: 2px solid #ffffff;
}
#time-container h2{
  position: absolute;
  color: #ffffff;
  font-weight: normal;
  left: 50%;
  transform: translateX(-50%);
}
#time{
  width: 80%;
  height: 40px;
  background-color: rgb(0, 108, 248);
}
</style>