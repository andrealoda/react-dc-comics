import logoBg from '../assets/img/dc-logo-bg.png'

export default function AppFooter() {

    return (

        <footer>
            <div className="container d-flex justify-content-between">
                <div className="footerLink">
                    <ul>
                        <li className='title'>DC COMICS</li>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos</li>
                        <li>News</li>
                    </ul>
                    <ul>
                        <li className='title'>SHOP</li>
                        <li>Shop DC</li>
                        <li>Shop DC Collectibles</li>
                    </ul>
                    <ul>
                        <li className='title'>DC</li>
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
                    <ul>
                        <li className='title'>SITES</li>
                        <li>DC</li>
                        <li>MAD Magazine</li>
                        <li>DC Kids</li>
                        <li>DC Universe</li>
                        <li>DC Power Visa</li>
                    </ul>

                    {/* costruire con row row-cols-1 row-cols-sm-2... + cols + liste bootstrap */}

                </div>
                <div className="footerLogo">
                    <img src={logoBg} alt="" className="w-100 h-100 object-fit-cover object-fit-center" />
                </div>
            </div>
        </footer >

    )
}