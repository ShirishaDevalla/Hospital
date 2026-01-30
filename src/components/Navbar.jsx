import './Navbar.css';
import Logo from '../images/logo.png';

export default function Navbar() {
  // const [searchText, setSearchText] = useState("");

  // const handleSearch = () => {
  //   if (searchText.trim() === "") return;
  //   alert("Searching for: " + searchText);
  //   // OR you can redirect to a search page:
  //   // window.location.href = `/search?query=${encodeURIComponent(searchText)}`;
  // };

  return (
    <div className='nav'>
      <nav className="navbar">
        <img src={Logo} alt="Logo Of Hospital" />

        <ul className='list-items'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* <input
          className='search-bar'
          type='search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
        />

        <img
          className='search-icon'
          src={SearchIcon}
          alt="Search Icon"
          onClick={handleSearch}
          style={{ cursor: "pointer" }}
        /> */}
      </nav>
    </div>
  );
}
