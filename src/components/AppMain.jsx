import jumbotronImg from '../assets/img/jumbotron.jpg'
import comics from '../data/comics.js'

export default function AppMain() {

    return (

        <main className="bg-black">
            <div className="jumbotronHead ">
                <img src={jumbotronImg} alt="" />

            </div>
            <div className="container text-white text-start">
                <div className="jumbotron d-flex flex-wrap justify-content-center gap-5 mt-5">

                    {comics.map((item) => (
                        <div className="card comic-card m-1" key={item.id}>
                            <img src={item.thumb} alt="" className='thumb' />
                        </div>
                    ))}


                </div>
                <div className="d-flex justify-content-center py-4 mt-2">
                    <button className="btn btn-primary px-5">LOAD MORE</button>
                </div>

            </div>
        </main>

    )
}