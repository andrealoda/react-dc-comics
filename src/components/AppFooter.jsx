import logoBg from '../assets/img/dc-logo-bg.png'


export default function AppFooter({dcComics, shop, dc, sites}) {

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
                    {/* </div> */}
                    {/* <div className="col"> */}
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