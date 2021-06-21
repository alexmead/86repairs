<!-- Loop over equipment data here, generation a new "card" for each on -->

<template>
  <div class="hello">
    <h2>Welcome to Vue frontend exercise!</h2>
    <ul>
      <a target="_blank" href="https://www.86repairs.com/"
        >Here's a link to our official company site</a
      >
    </ul>
    <ul>
      <a target="_blank" href="https://www.youtube.com/watch?v=OimrN6dn7HA"
        >Here's a video of our CEO being his charismatic self</a
      >
    </ul>
    <ul>
      <a
        target="_blank"
        href="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        >Here's a cute picture of a cat</a
      >
    </ul>
    <ul>
      <a
        target="blank"
        href="https://www.google.com/search?q=how+to+google+things+better"
      >
        Here are some tips about how to be a better developer</a
      >
    </ul>
    <!-- Template of a card I will use to display data. -->
    <!-- How to generate these iteratively via a loop? -->

    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: "Home",
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 60px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
