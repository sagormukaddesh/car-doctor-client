
const BookingRow = ({ booking, handleDelete,handleConfirm }) => {
    const { _id, service, img, price, date , status} = booking;




    return (
        <tr className="font-bold text-stone-600">
            <th>
                <button onClick={() => handleDelete(_id)}
                    className="btn btn-sm bg-red-400 btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>

            <td>
                <div className="avatar">
                    <div className="rounded w-60 h-40">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className="text-2xl text-sky-500">
                {service}
            </td>
            <td className="text-xl text-red-600">${price}</td>
            <td className=" text-blue-500">{date}</td>
            <th>
               {
                status ==='confirm' ? <span className="font-bold text-primary"> Confirmed</span> :
                 <button onClick={() => handleConfirm(_id)}
                 className="btn btn-sm font-bold btn-outline btn-info">please Confirm</button>
               }
            </th>
        </tr>


    )
};

export default BookingRow;