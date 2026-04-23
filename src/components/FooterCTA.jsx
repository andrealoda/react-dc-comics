import facebook from '../assets/img/footer-facebook.png'
import twitter from '../assets/img/footer-twitter.png'
import youtube from '../assets/img/footer-youtube.png'
import pinterest from '../assets/img/footer-pinterest.png'
import periscope from '../assets/img/footer-periscope.png'



export default function FooterCTA({ socialLinks }) {

    return (
        <section className="footer-cta">
            <div className="container">
                <div className="cta-btn mb-2">
                    <a href="#" className='text-decoration-none text-white'>
                        <span>SING-UP NOW!</span>
                    </a>
                </div>
                <div className="follow mb-2">
                    <span className="text-primary">FOLLOW US</span>


                    {socialLinks.map((item) => (
                        <a href={item.path} key={item.id}>
                            <img src={item.img} alt="" />
                        </a>
                    ))}

                </div>
            </div>
        </section>
    )
}