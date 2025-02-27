import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
    const { googleRegister, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const googleSignin = () => {
        googleRegister()
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
                const userInfo = {
                    userName: result.user?.displayName,
                    userEmail: result.user?.email,
                    userphoto: result.user?.photoURL,
                    userRole: "User"
                }
                axios.post('http://localhost:5000/users', userInfo)
                    .then(result => {
                        setUser(result.data);
                        console.log(result.data);
                        navigate('/')
                    })
            })
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <h1 className="text-red-500 font-black text-3xl my-6">You have to login first!</h1>
            <button onClick={googleSignin} className="bg-pink-700 flex items-center gap-3 text-white rounded-md py-3 px-6 text-lg shadow-md">
                <FaGoogle className="text-xl" />
                Continue with Google
            </button>

            <Link className="mt-5 text-red-500" to={'/signin'}>
                Already a user? <span className="text-primary font-bold">Sign In</span>
            </Link>
        </div>
    );
};

export default SignUp;
