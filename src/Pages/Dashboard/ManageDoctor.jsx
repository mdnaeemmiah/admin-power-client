import { Helmet } from "react-helmet";


const ManageDoctor = () => {
    return (
        <div>
            <Helmet>
                <title>Manage Doctor </title>
            </Helmet>
            <h2 className="font-bold text-2xl">Manage Doctor: </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> # </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>SPECIALITY</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                1
                            </th>
                            <td>
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </td>
                            <td>
                                Zemlak
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;