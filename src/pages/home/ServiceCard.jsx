import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ml-3 ">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="text-xl font-bold"> Price: <span className="text-xl font-bold text-orange-600">${price}</span></p>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}
                    ><button className="btn btn-sm font-bold btn-outline btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;