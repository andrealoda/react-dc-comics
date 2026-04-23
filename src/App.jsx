
import AppHeader from "./components/AppHeader.jsx";
import AppMain from "./components/AppMain.jsx";
import UtilityBar from "./components/UtilityBar.jsx";
import AppFooter from "./components/AppFooter.jsx";
import FooterCTA from "./components/FooterCTA.jsx";

import facebook from './assets/img/footer-facebook.png'
import twitter from './assets/img/footer-twitter.png'
import youtube from './assets/img/footer-youtube.png'
import pinterest from './assets/img/footer-pinterest.png'
import periscope from './assets/img/footer-periscope.png'

import comics from './assets/img/buy-comics-digital-comics.png'
import merchandise from './assets/img/buy-comics-merchandise.png'
import subscription from './assets/img/buy-comics-subscriptions.png'
import locator from './assets/img/buy-comics-shop-locator.png'
import visa from './assets/img/buy-dc-power-visa.svg'


const menu=[{id:1,text:"CHARACTERS",path:"/characters"},{id:2,text:"COMICS",path:"/comics"},{id:3,text:"MOVIE",path:"/movie"},{id:4,text:"TV",path:"/tv"},{id:5,text:"GAMES",path:"/games"},{id:6,text:"COLLECTIBLES",path:"/collectibles"},{id:7,text:"VIDEO",path:"/video"},{id:8,text:"FANS",path:"/fans"},{id:9,text:"NEWS",path:"/news"},{id:10,text:"SHOP",path:"/shop"}];
const dcComics = [{ id: 1, text: "Characters", link: "/characters" }, { id: 2, text: "Comics", link: "/comics" }, { id: 3, text: "Movies", link: "/movies" }, { id: 4, text: "TV", link: "/tv" }, { id: 5, text: "Games", link: "/games" }, { id: 6, text: "Videos", link: "/videos" }, { id: 7, text: "News", link: "/news" }];
const shop = [{ id: 1, text: "Shop DC", link: "/shop-dc" }, { id: 2, text: "Shop DC Collectibles", link: "/shop-dc-collectibles" }];
const dc = [{ id: 1, text: "Terms Of Use", link: "/terms-of-use" }, { id: 2, text: "Privacy policy (New)", link: "/privacy-policy" }, { id: 3, text: "Ad Choises", link: "/ad-choices" }, { id: 4, text: "Advertising", link: "/advertising" }, { id: 5, text: "Jobs", link: "/jobs" }, { id: 6, text: "Subscriptions", link: "/subscriptions" }, { id: 7, text: "Talent workshop", link: "/talent-workshop" }, { id: 8, text: "CPSC Certificates", link: "/cpsc-certificates" }, { id: 9, text: "Ratings", link: "/ratings" }, { id: 10, text: "Shop Help", link: "/shop-help" }, { id: 11, text: "Contact Us", link: "/contact-us" }];
const sites = [{ id: 1, text: "DC", link: "/dc" }, { id: 2, text: "MAD Magazine", link: "/mad-magazine" }, { id: 3, text: "DC Kids", link: "/dc-kids" }, { id: 4, text: "DC Universe", link: "/dc-universe" }, { id: 5, text: "DC Power Visa", link: "/dc-power-visa" }];
const utilityLinks=[{id:1,text:"DIGITAL COMICS",icon:comics},{id:2,text:"DC MERCHANDISE",icon:merchandise},{id:3,text:"SUBSCRIPTION",icon:subscription},{id:4,text:"COMIC SHOP LOCATOR",icon:locator},{id:5,text:"DC POWER VISA",icon:visa}];
const socialLink=[{id:1,text:"facebook",path:"/facebook",img:facebook},{id:2,text:"twitter",path:"/twitter",img:twitter},{id:3,text:"youtube",path:"/youtube",img:youtube},{id:4,text:"pinterest",path:"/pinterest",img:pinterest},{id:5,text:"periscope",path:"/periscope",img:periscope}];

import data from "./data/comics.js";

export default function App() {
  console.log(data);
  
  return (
    <>

      <AppHeader menu={menu}/>
      <AppMain />
      <UtilityBar utilityLinks= {utilityLinks}/>
      <AppFooter dcComics={dcComics} shop={shop} dc={dc} sites={sites}/>
      <FooterCTA socialLinks={socialLink}/>

    </>
  )
}