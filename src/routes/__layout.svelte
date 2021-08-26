<div class="container">
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
  </nav>
  <slot />
</div>

<style>

.container {
  max-width: 800px;
  margin: 50px auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0
}

li {
  margin: 10px;
}

</style>