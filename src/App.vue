<template>
  <header>
    <nav class="navbar">
      <nav class="logo">
        <img src="./assets/LOGO.jpeg" alt="">
        <h2>AlQuran</h2>
      </nav>

      <RouterLink to="/" class="link">Home</RouterLink>
      <RouterLink to="/Surah" class="link">Surah</RouterLink>
      <RouterLink to="/Cari" class="link">Cari</RouterLink>
      <RouterLink to="/about" class="link">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
  #app {
    min-height: 100vh;
    background-color: #f2f2f2;
    font-weight: normal;
  }

  .navbar {
    padding: 20px 20px;
    display: flex;
    justify-content: right;
    background-color: darkslategrey;
  }
  
  h2 {
    color: white;
    font-size: 20px;
    padding-left: 20%;
  }

  .logo {
    height: 60px;
    width: 60px;
    padding-right:69%;
    display: flex;
    justify-content: left;
    background-color: darkslategrey;
  }

  .link {
    color: white;
    font-size: 20px;
    padding: 10px;
    text-decoration: none;
    margin-right: 2%;

  }

  .logo img {
    border-radius: 100%;
  }

  @media screen and (max-width: 600px) {
  .column, input[type=submit] {
    width: 100%;
    display: flex;
    margin-top: 0;
    align-items: center;
  }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>
