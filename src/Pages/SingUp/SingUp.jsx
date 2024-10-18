
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin";
import useAuth from "../../hook/useAuth";



const SingUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updatedUserProfile } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updatedUserProfile(data.name, data.photoURL)
                    .then(() => {
                        //    create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added');
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Create Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <>
            <Helmet>
                <title>Sing Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input  {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                                {errors.photoURL && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input  {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true, minLength: 6, maxLength: 20 })} type="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span className="text-red-500">password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">6 characters password is required</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500"> password must be 20 is characters </span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sing Up" />
                            </div>
                        </form>
                        <p className='text-2xl text-center p-4'><small>You Have an account <Link to='/login'>Login</Link></small></p>
                      <div className="text-center">
                      <SocialLogin></SocialLogin>
                      </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingUp;