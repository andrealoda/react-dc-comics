import comics from '../assets/img/buy-comics-digital-comics.png'
import merchandise from '../assets/img/buy-comics-merchandise.png'
import subscription from '../assets/img/buy-comics-subscriptions.png'
import locator from '../assets/img/buy-comics-shop-locator.png'
import visa from '../assets/img/buy-dc-power-visa.svg'


const utilityLinks = [
    {
        id: 1,
        text: "DIGITAL COMICS",
        icon: comics
    },
    {
        id: 2,
        text: "DC MERCHANDISE",
        icon: merchandise
    },
    {
        id: 3,
        text: "SUBSCRIPTION",
        icon: subscription
    },
    {
        id: 4,
        text: "COMIC SHOP LOCATOR",
        icon: locator
    },
    {
        id: 5,
        text: "DC POWER VISA",
        icon: visa
    }

]

export default function UtilityBar() {

    return (

        <section className="utilityBar">
            <div className="container">


                {utilityLinks.map((item) => (
                    <div className="link" key={item.id}>
                        <a href="#" className='text-decoration-none text-white'>
                            <img src={item.icon} alt="" />
                            <span>{item.text}</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>


    )
}