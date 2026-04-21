export default function UtilityBar({utilityLinks}) {

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