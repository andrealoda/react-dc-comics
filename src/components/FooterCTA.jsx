import facebook from '../assets/img/footer-facebook.png'
import twitter from '../assets/img/footer-twitter.png'
import youtube from '../assets/img/footer-youtube.png'
import pinterest from '../assets/img/footer-pinterest.png'
import periscope from '../assets/img/footer-periscope.png'

export default function FooterCTA() {

    return (
        <section className="footer-cta">
            <div className="container">
                <div className="cta-btn">
                    <span>SING-UP NOW!</span>
                </div>
                <div className="follow">
                    <span className="text-primary">FOLLOW US</span>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={periscope} alt="" />

                </div>
            </div>
        </section>
    )
}