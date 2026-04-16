import comics from '../assets/img/buy-comics-digital-comics.png'
import merchandise from '../assets/img/buy-comics-merchandise.png'
import subscription from '../assets/img/buy-comics-subscriptions.png'
import locator from '../assets/img/buy-comics-shop-locator.png'
import visa from '../assets/img/buy-dc-power-visa.svg'


export default function UtilityBar() {

    return (

        <section className="utilityBar">
            <div className="container">
                <div className="link">
                    <img src={comics} alt="" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className="link">
                    <img src={merchandise} alt="" />
                    <span>DC MERCHANDISE</span>
                </div>
                <div className="link">
                    <img src={subscription} alt="" />
                    <span>SUBSCRIPTION</span>
                </div>
                <div className="link">
                    <img src={locator} alt="" />
                    <span>COMIC SHOP LOCATOR</span>
                </div>
                <div className="link">
                    <img src={visa} alt="" />
                    <span>DC POWER VISA</span>
                </div>
            </div>
        </section>


    )
}