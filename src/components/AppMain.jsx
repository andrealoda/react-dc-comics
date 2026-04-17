import jumbotronImg from '../assets/img/jumbotron.jpg'
import comics from '../data/comics.js'

export default function AppMain() {

    return (

        <main className="bg-black">
            <div className="jumbotronHead ">
                <img src={jumbotronImg} alt="" />

            </div>
            <div className="container text-white text-start">
                <button className="btn btn-primary rounded-0 px-5 negative-translation-50">CURRENT SERIES</button>
                <div className="jumbotron d-flex flex-wrap justify-content-center gap-5 mt-5">

                    {comics.map((item) => (
                        <div className="card comic-card m-1 bg-black" key={item.id}>
                            <img src={item.thumb} alt="" className='thumb' />
                            <span className="comics-text text-white mt-2">{item.title}</span>
                        </div>
                    ))}


                </div>
                <div className="d-flex justify-content-center py-4 mt-2">
                    <button className="btn btn-primary rounded-0 px-5">LOAD MORE</button>
                </div>

            </div>
        </main>

    )
}