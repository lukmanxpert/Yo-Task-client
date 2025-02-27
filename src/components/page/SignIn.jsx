import { FaGoogle } from "react-icons/fa6";
import signIn from "../../assets/Sign in-pana.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignIn = () => {
    const { googleRegister, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const googleSignin = () => {
        googleRegister()
            .then((result) => {
                setUser(result.user);
                result.user && navigate('/')
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
            <img className="w-72 md:w-96 lg:w-[400px] mb-6" src={signIn} alt="Sign Up" />

            <button onClick={googleSignin} className="bg-black flex items-center gap-3 text-white rounded-md py-3 px-6 text-lg shadow-md">
                <FaGoogle className="text-xl" />
                Continue with Google
            </button>

            <Link className="mt-5 text-lg" to={'/signup'}>
                Need an account? <span className="text-primary font-bold">Sign UP</span>
            </Link>
        </div>
    );
};

export default SignIn;