import jumbotronImg from '../assets/img/jumbotron.jpg'
import comics from '../data/comics.js'

export default function AppMain() {

    return (

        <main className="bg-black">
            <div className="jumbotronHead ">
                <img src={jumbotronImg} alt="" />

            </div>
            <div className="container text-white text-start">
                <a href="#">
                    <button className="btn btn-primary rounded-0 px-5 negative-translation-50">CURRENT SERIES</button>
                </a>

                <div className="jumbotron d-flex flex-wrap justify-content-center gap-5 mt-5">

                    {comics.map((item) => (
                        <div className="card comic-card bg-black" key={item.id}>
                            <a href="#" className="text-decoration-none text-center">
                                <img src={item.thumb} alt="" className='thumb' />
                                <span className="comics-text text-white">{item.title}</span>
                            </a>
                        </div>
                    ))}


                </div>
                <div className="d-flex justify-content-center py-4">
                    <a href="#">
                        <button className="btn btn-primary rounded-0 px-5">LOAD MORE</button>
                    </a>
                </div>

            </div>
        </main>

    )
}