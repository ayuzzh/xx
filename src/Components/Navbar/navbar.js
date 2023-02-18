import './navbar.css';

function Navbar() {
  return (
        <nav class="navbar">

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <div class="navbar__search-bar-box">
              <input placeholder="Search" class="navbat__search-bar"/>
              hey
            </div>
          </ul>

        </nav>
  );
}

export default Navbar;
