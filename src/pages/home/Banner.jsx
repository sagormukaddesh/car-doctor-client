import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />

                <div className="absolute h-full rounded-xl flex items-center left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 pl-12 w-1/2 -">
                        <h2 className="text-6xl font-semibold ">Affordable Price For Car Servicing</h2>
                        <p className="text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=" flex ">
                            <button className="btn btn-error font-bold mr-4">Discover more</button>
                            <button className="btn btn-outline  font-bold btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-green-400 mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-red-400">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />

                <div className="absolute h-full rounded-xl flex items-center left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 pl-12 w-1/2 -">
                        <h2 className="text-6xl font-semibold ">Affordable Price For Car Servicing</h2>
                        <p className="text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=" flex ">
                            <button className="btn btn-error font-bold mr-4">Discover more</button>
                            <button className="btn btn-outline font-bold btn-warning">Letest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 bg-yellow-400">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-sky-400">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 pl-12 w-1/2 -">
                        <h2 className="text-6xl font-semibold ">Affordable Price For Car Servicing</h2>
                        <p className="text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=" flex ">
                            <button className="btn btn-error font-bold mr-4">Discover more</button>
                            <button className="btn btn-outline font-bold btn-warning">Letest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 bg-blue-400">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-orange-400">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 pl-12 w-1/2 -">
                        <h2 className="text-6xl font-semibold ">Affordable Price For Car Servicing</h2>
                        <p className="text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=" flex ">
                            <button className="btn btn-error font-bold mr-4">Discover more</button>
                            <button className="btn btn-outline font-bold btn-warning">Letest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5 bg-green-400">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-orange-400">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;