import logoBg from '../assets/img/dc-logo-bg.png'

const dcComics = [
    {
        id: 1,
        text: "Characters",
        link: "/characters"
    },
    {
        id: 2,
        text: "Comics",
        link: "/comics"
    },
    {
        id: 3,
        text: "Movies",
        link: "/movies"
    },
    {
        id: 4,
        text: "TV",
        link: "/tv"
    },
    {
        id: 5,
        text: "Games",
        link: "/games"
    },
    {
        id: 6,
        text: "Videos",
        link: "/videos"
    },
    {
        id: 7,
        text: "News",
        link: "/news"
    }
]

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
                        <h3 className='title'>SHOP</h3>
                        <ul>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className='title'>DC</h3>
                        <ul>
                            <li>Terms Of Use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choises</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent workshop</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className='title'>SITES</h3>
                        <ul>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>

                    {/* costruire con row row-cols-1 row-cols-sm-2... + cols + liste bootstrap */}



                </div>
                <div className="footerLogo">
                    <img src={logoBg} alt="" />
                </div>
            </div>
        </footer >

    )
}