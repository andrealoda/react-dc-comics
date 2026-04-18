import facebook from '../assets/img/footer-facebook.png'
import twitter from '../assets/img/footer-twitter.png'
import youtube from '../assets/img/footer-youtube.png'
import pinterest from '../assets/img/footer-pinterest.png'
import periscope from '../assets/img/footer-periscope.png'

const socialLink = [
    {
        id: 1,
        text: "facebook",
        path: "/facebook",
        img: facebook
    },
    {
        id: 2,
        text: "twitter",
        path: "/twitter",
        img: twitter
    },
    {
        id: 3,
        text: "youtube",
        path: "/youtube",
        img: youtube
    },
    {
        id: 4,
        text: "pinterest",
        path: "/pinterest",
        img: pinterest
    },
    {
        id: 5,
        text: "periscope",
        path: "/periscope",
        img: periscope
    }
]

export default function FooterCTA() {

    return (
        <section className="footer-cta">
            <div className="container">
                <div className="cta-btn">
                    <a href="#" className='text-decoration-none text-white'>
                        <span>SING-UP NOW!</span>
                    </a>
                </div>
                <div className="follow">
                    <span className="text-primary ">FOLLOW US</span>


                    {socialLink.map((item) => (
                        <a href={item.path} key={item.id}>
                            <img src={item.img} alt="" />
                        </a>
                    ))}

                </div>
            </div>
        </section>
    )
}