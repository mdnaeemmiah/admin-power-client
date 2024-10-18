import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const LoadedData = () => {

    const { data: doctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: () =>
            fetch('http://localhost:5000/doctors').then((res) =>
              res.json(),
            ),
    })


    return (
        <div className="grid md:grid-cols-3  gap-7">
          

            {
                doctors.map(doctor => (
                    <div
                    key={doctor._id}
                    className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={doctor.image}
                                alt="image"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{doctor.name}</h2>
                            <p>{doctor.description}</p>
                            <Link className="card-actions">
                                <button className="btn btn-primary">View Profile</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default LoadedData;