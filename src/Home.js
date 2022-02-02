import React from "react";
import "./Home.css";
import { ImWhatsapp } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { AiFillPhone } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
// import Navbar from './Navbar';
import Product from "./Product.js";
import Product1 from "./Product1.js";

function Home() {
  return (
    <div className="home">
      <div className="home--container">
        <div className="home--row1">
          <Product
            id="01"
            title="Up to 50% off | Alexa & Fire TV devices"
            price={4450}
            image={
              "https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UY218_.jpg"
            }
          />
          <Product
            id="02"
            title="Up to 40% off | Mobiles & accessories"
            price={200}
            image="https://m.media-amazon.com/images/I/61urU8k2lFL._SL1500_.jpg"
          />
          <Product
            id="03"
            title="TIMEWEAR Digital Men's Watch"
            price={100}
            image="https://m.media-amazon.com/images/I/81qcmjX9TrL._UL1500_.jpg"
          />
        </div>
        <div className="home--row">
          <Product
            id="05"
            title="HP 15 Thin & Light 11th Gen Core i3 Laptop"
            price={500}
            image="https://m.media-amazon.com/images/I/81Ne5qKmE8L._SL1500_.jpg"
          />
          <Product
            id="06"
            title="Redmi 139 cm (55 inches) 4K Ultra HD Android Smart LED TV (Black)"
            price={50}
            image="https://images-eu.ssl-images-amazon.com/images/I/51DG3OI8blL._SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="slider">
          <div className="slider--title">
            <h2>Blockbuster Deals</h2>
            <p>See all Details</p>
          </div>
          <div className="tr">
            <Product1
              className="image--slider1"
              id="06"
              image="https://m.media-amazon.com/images/I/41tVF+aJd-L._AC_SY200_.jpg"
              price={300}
            />
            <Product1
              className="image--slider1"
              id="06"
              image="https://m.media-amazon.com/images/I/416SpYgTVYL._AC_SY200_.jpg"
              price={300}
            />
            <Product1
              className="image--slider1"
              id="06"
              image="https://m.media-amazon.com/images/I/41P4Al+S3zL._AC_SY200_.jpg"
              price={300}
            />
            <Product1
              className="image--slider1"
              id="06"
              image="https://m.media-amazon.com/images/I/41pfjyUPZLL._AC_SY200_.jpg"
              price={300}
            />
            <Product1
              className="image--slider1"
              id="06"
              image="https://m.media-amazon.com/images/I/51jiSil94-L._AC_SY200_.jpg"
              price={300}
            />
            <Product1
              className="image--slider1"
              id="06"
              image="https://m.media-amazon.com/images/I/31LC-FBgpBL._AC_SY200_.jpg"
              price={300}
            />
            <Product1
              className="image--slider1"
              id="06"
              image="https://m.media-amazon.com/images/I/31-v8lDGUbL._AC_SY200_.jpg"
              price={300}
            />
            <Product1
              className="image--slider1"
              id="06"
              image="https://m.media-amazon.com/images/I/51me9Bxq3BL._AC_SY200_.jpg"
              price={300}
            />

            <Product1
              className="image--slider1"
              id="06"
              image="https://m.media-amazon.com/images/I/41uA9LygF-L._AC_SY200_.jpg"
              price={300}
            />
            <Product1
              className="image--slider1"
              id="06"
              image=" https://m.media-amazon.com/images/I/41uukr8rcJL._AC_SY200_.jpg"
              price={300}
            />
          </div>
        </div>
        <div className="home--row">
          <Product
            id="06"
            title="New Apple iPhone 12 Pro Max (256GB)"
            price={1.0}
            image="https://images-eu.ssl-images-amazon.com/images/I/41N9-hbLe0L._SY445_SX342_QL70_FMwebp_.jpg"
          />

          <Product
            id="07"
            title="ASUS VivoBook 15 (2020), 39.6 cm HD, Dual Core"
            price={2000.0}
            image="https://m.media-amazon.com/images/I/71S8U9VzLTL._SL1500_.jpg"
          />
          <Product
            id="08"
            title="Noise ColorFit Ultra Smartwatch with 1.75 HD TruView Display"
            price={3.0}
            image="https://m.media-amazon.com/images/I/71mRLPn333L._SL1500_.jpg"
          />
        </div>
        <div className="slider">
          <div className="slider--title1">
            <h2>Up to 40% off | Smartphones & accessories</h2>
            <p>See all offers</p>
          </div>
          <div className="tr1">
            <img1
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/JanART/Imageshov/1x/D37353571_DesktopShoveler_1_._CB647028780_.jpg"
              alt="mirzapur"
              width="180"
              height="289"
              className="image--slider"
            />

            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/JanART/Imageshov/1x/D37353571_DesktopShoveler_._CB647028780_.jpg"
              width="180"
              height="289"
              className="image--slider"
            />

            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/JanART/Imageshov/1x/D37353571_DesktopShoveler_1x_3._CB647454119_.jpg"
              alt="Lucifer"
              width="180"
              height="289"
              className="image--slider"
            />

            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/JanART/Imageshov/1x/D37353571_DesktopShoveler_2._CB647030409_.jpg"
              width="180"
              height="289"
              className="image--slider"
            />

            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/JanART/Imageshov/1x/D37353571_DesktopShoveler_1x_3._CB647454119_.jpg"
              alt="insideedge"
              width="180"
              height="289"
              className="image--slider"
            />

            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/JanART/Imageshov/1x/D37353571_DesktopShoveler_1x_1._CB647454119_.jpg"
              width="180"
              height="289"
              className="image--slider"
            />

            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/JanART/Imageshov/1x/DesktopShoveler_2._CB647029114_.jpg"
              alt="familyman"
              width="180"
              height="289"
              className="image--slider"
            />

            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/JanART/Imageshov/1x/D37353571_DesktopShoveler_1x_2._CB647454119_.jpg"
              alt="rava"
              width="180"
              height="289"
              className="image--slider"
            />

            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/JanART/Imageshov/1x/DesktopShoveler_2._CB647029114_.jpg"
              alt="fast&furious"
              width="180"
              height="289"
              className="image--slider"
            />

            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/JanART/Imageshov/1x/D37353571_DesktopShoveler_1x_2._CB647454119_.jpg"
              alt="frozening"
              width="180"
              height="289"
              className="image--slider"
            />
          </div>
        </div>
        <div className="home--row">
          <Product
            id="06"
            title="New Apple iPhone 12 Pro Max (256GB)"
            price={1.0}
            image="https://images-eu.ssl-images-amazon.com/images/I/41N9-hbLe0L._SY445_SX342_QL70_FMwebp_.jpg"
          />

          <Product
            id="07"
            title="Noise ColorFit Pulse Spo2 Smart Watch with 10 days battery life"
            price={2000.0}
            image="https://images-eu.ssl-images-amazon.com/images/I/41XH-IpxCQL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="04"
            title="DIGITEK® (DHM-001) Wired Stereo Headphones with Mic"
            price={50}
            image="https://m.media-amazon.com/images/I/51lNdi1DyfL._SL1280_.jpg"
          />
          <Product
            className="image--slider1"
            id="09"
            title={null}
            image="https://m.media-amazon.com/images/I/41tVF+aJd-L._AC_SY200_.jpg"
            price={300}
          />
        </div>
          <footer className="footer--distributed">
            <div className="footer--left">
              <h3>
                Asil <span>Shopping Mart</span>
              </h3>
              <p className="footer--links">
                <a href="#">Home</a> | <a href="#">About</a> | 
                   <a href="#">&nbsp;Contacts</a>
              </p>
              <p className="footer--Name">
                Copyright © 2021 <strong>Asil Shopping Mart</strong>
              </p>
            </div>
            <div className="footer--center">
              <div>
               <BiMap className="footer--icons1" />
               <p><span>Kalyan</span>&nbsp;( West )</p>
              </div>
              <div>
               <AiFillPhone className="footer--icons1" />
               <p>+91 7303131991</p>
              </div>
              <div>
               <BsFillEnvelopeFill className="footer--icons1" />
               <p><a href="#">asilshaikh123@gmail.com</a></p>
              </div>
            </div>
            <div className="footer--right">
              <p className="footer--about">
                <span>About the Website</span>
                <strong>Asil Shopping Mart</strong> is a website for shopping 😆😆😆😆 Actually it is a E-commerce Website using Reactjs.
              </p>
              <div className="footer--icons">
                <a href="#"><ImWhatsapp /></a>
                <a href="#"><ImFacebook2 /></a>
                <a href="#"><ImInstagram /></a>
                <a href="#"><ImGithub /></a>
                <a href="#"><ImTwitter /></a>
              </div>
            </div>
          </footer>
        </div>
      </div>
  );
}

export default Home;
