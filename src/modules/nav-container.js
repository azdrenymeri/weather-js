// import logo from './../img/logo.png';
const header = document.createElement("div");
header.classList.add("site-header");
header.innerHTML = `
<div class="container">
  <a href="index.html" class="branding">

    <div class="logo-type">
      <h1 class="site-title">Company name</h1>
      <small class="site-description">tagline goes here</small>
    </div>
  </a>

  <!-- Default snippet for navigation -->
  <div class="main-navigation">
    <button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
    <ul class="menu">
      <li class="menu-item current-menu-item"><a href="index.html">Home</a></li>
      <li class="menu-item"><a href="news.html">News</a></li>
      <li class="menu-item"><a href="live-cameras.html">Live cameras</a></li>
      <li class="menu-item"><a href="photos.html">Photos</a></li>
      <li class="menu-item"><a href="contact.html">Contact</a></li>
    </ul> <!-- .menu -->
  </div> <!-- .main-navigation -->

  <div class="mobile-navigation"></div>

</div>
`;

export { header };
