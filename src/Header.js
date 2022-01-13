import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


// import Navbar from './Navbar';
function Header() {
  const [{cart}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
      </Link>
      <div className="header--address">
        <LocationOnOutlinedIcon className="header--adressIcon" />
        <div className="header--addressline">
          <span className="header--optionLineOne"> Hello</span>
          <span className="header--optionLineTwo"> Select your address</span>
        </div>
      </div>
      <div className="header--search">
        <div className="header--searchcategories">
          <select className="all--categories">
            <option selected="selected">All </option>
            <option value="search-alias=todays-deals">Deals</option>
            <option value="search-alias=alexa-skills">Alexa Skills</option>
            <option value="search-alias=amazon-devices">Amazon Devices</option>
            <option value="search-alias=fashion">Amazon Fashion</option>
            <option value="search-alias=pantry">Amazon Pantry</option>
            <option value="search-alias=appliances">Appliances</option>
            <option value="search-alias=mobile-apps">Apps &amp; Games</option>
            <option value="search-alias=baby">Baby</option>
            <option value="search-alias=beauty">Beauty</option>
            <option value="search-alias=stripbooks">Books</option>
            <option value="search-alias=automotive">Car &amp; Motorbike</option>
            <option value="search-alias=apparel">Clothing &amp; Accessories</option>
            <option value="search-alias=collectibles">Collectibles</option>
            <option value="search-alias=computers">Computers &amp; Accessories</  option>
            <option value="search-alias=furniture">Furniture</option>
            <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
            <option value="search-alias=gift-cards">Gift Cards</option>
            <option value="search-alias=grocery">Grocery &amp; Gourmet Foods</option>
            <option value="search-alias=hpc">Health &amp; Personal Care</option>
            <option value="search-alias=industrial">Industrial &amp; Scientific</  option>
            <option value="search-alias=jewelry">Jewellery</option>
            <option value="search-alias=digital-text">Kindle Store</option>
            <option value="search-alias=luggage">Luggage &amp; Bags</option>
            <option value="search-alias=luxury-beauty">Luxury Beauty</option>
            <option value="search-alias=dvd">Movies &amp; TV Shows</option>
            <option value="search-alias=popular">Music</option>
            <option value="search-alias=mi">Musical Instruments</option>
            <option value="search-alias=office-products">Office Products</option>
            <option value="search-alias=pets">Pet Supplies</option>
            <option value="search-alias=instant-video">Prime Video</option>
            <option value="search-alias=shoes">Shoes &amp; Handbags</option>
            <option value="search-alias=software">Software</option>
            <option value="search-alias=sporting">Sports, Fitness &amp; Outdoors</  option>
            <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
            <option value="search-alias=toys">Toys &amp; Games</option>
            <option value="search-alias=under-ten-dollars">Under ₹500</option>
            <option value="search-alias=videogames">Video Games</option>
            <option value="search-alias=watches">Watches</option>
          </select>
        </div>
        <input className="header--searchInput" type="text" />
        {/* Material UI */}
        <div className="header--searchicondiv">
          <SearchIcon className="header--searchIcon" />
        </div>
      </div>

      <div className="header--nav">
        <img className="header--optionflag" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" alt="flag" />
        <ArrowDropDownIcon className="arrow--flag" />
        <Link to = '/login' style={{ textDecoration: 'none'}} > 
        <div className="header--option">
          <span className="header--optionLineOne">Hello Guest</span>
          <span className="header--optionLineTwo">Sign In</span>
        </div>
        </Link>

        <div className="header--option">
          <span className="header--optionLineOne">Return</span>
          <span className="header--optionLineTwo">& Order</span>
        </div>

        <div className="header--option">
          <span className="header--optionLineOne">Your</span>
          <span className="header--optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout" style={{ textDecoration: 'none'}}>
        <div className="header--optionBasket">
          <ShoppingCartIcon />
          <span className="header--optionLineTwo1 header--basketCount">{cart?.length}</span>
        </div>
      </Link>


    </div>
  )
}

export default Header;