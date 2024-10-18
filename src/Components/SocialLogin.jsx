import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useAxiosPublic from "../hook/useAxiosPublic";


const SocialLogin = () => {
   const {googleSingIn} = useAuth();
   const axiosPublic =useAxiosPublic();
   const navigate =useNavigate();

   const handleGoogleSingIn =()=>{
    googleSingIn()
    .then(result=>{
        // console.log(result.user);
        const userinfo ={
            name: result.user?.displayName,
            email:result.user?.email,
        }
        axiosPublic.post(`/user`,userinfo)
        .then(res=>{
            console.log(res.data);
            navigate('/')
        })
    })
    .catch(error=>{
        console.log(error);
    })
   }

    return (
        <div className="p-8 ">
              <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSingIn} className="btn bg-green-600">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;