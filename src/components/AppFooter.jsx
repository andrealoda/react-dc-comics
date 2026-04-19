import logoBg from '../assets/img/dc-logo-bg.png'

const dcComics = [{ id: 1, text: "Characters", link: "/characters" }, { id: 2, text: "Comics", link: "/comics" }, { id: 3, text: "Movies", link: "/movies" }, { id: 4, text: "TV", link: "/tv" }, { id: 5, text: "Games", link: "/games" }, { id: 6, text: "Videos", link: "/videos" }, { id: 7, text: "News", link: "/news" }];
const shop = [{ id: 1, text: "Shop DC", link: "/shop-dc" }, { id: 2, text: "Shop DC Collectibles", link: "/shop-dc-collectibles" }];
const dc = [{ id: 1, text: "Terms Of Use", link: "/terms-of-use" }, { id: 2, text: "Privacy policy (New)", link: "/privacy-policy" }, { id: 3, text: "Ad Choises", link: "/ad-choices" }, { id: 4, text: "Advertising", link: "/advertising" }, { id: 5, text: "Jobs", link: "/jobs" }, { id: 6, text: "Subscriptions", link: "/subscriptions" }, { id: 7, text: "Talent workshop", link: "/talent-workshop" }, { id: 8, text: "CPSC Certificates", link: "/cpsc-certificates" }, { id: 9, text: "Ratings", link: "/ratings" }, { id: 10, text: "Shop Help", link: "/shop-help" }, { id: 11, text: "Contact Us", link: "/contact-us" }];
const sites = [{ id: 1, text: "DC", link: "/dc" }, { id: 2, text: "MAD Magazine", link: "/mad-magazine" }, { id: 3, text: "DC Kids", link: "/dc-kids" }, { id: 4, text: "DC Universe", link: "/dc-universe" }, { id: 5, text: "DC Power Visa", link: "/dc-power-visa" }];

export default function AppFooter() {

    return (

        <footer>
            <div className="container d-flex justify-content-between">
                <div className="footerLink row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div className="col">
                        <h5 className='title'>DC COMICS</h5>
                        <ul>
                            {dcComics.map((item) => (
                                <li key={item.id} >
                                    <a className='text-decoration-none text-secondary' href={item.link}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className='title'>SHOP</h5>
                        <ul>
                            {shop.map((item) => (
                                <li key={item.id} >
                                    <a className='text-decoration-none text-secondary' href={item.link}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className='title'>DC</h5>
                        <ul>
                            {dc.map((item) => (
                                <li key={item.id}>
                                    <a className="text-decoration-none text-secondary" href={item.link}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className='title'>SITES</h5>
                        <ul>
                            {sites.map((item) => (
                                <li key={item.id}>
                                    <a className="text-decoration-none text-secondary" href={item.link}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="footerLogo">
                    <img src={logoBg} alt="" />
                </div>
            </div>
        </footer >

    )
}