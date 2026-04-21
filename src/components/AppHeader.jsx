import headerLogo from '../assets/img/dc-logo.png'


export default function AppHeader({ menu }) {

    return (

        <header className='bg-white'>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={headerLogo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                {menu.map((item) => (
                                    <li className="nav-item p-2 text-dark" key={item.id}>
                                        <a href={item.path} className="text-black text-decoration-none">{item.text}</a>
                                    </li>
                                ))}


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header >

    )
}