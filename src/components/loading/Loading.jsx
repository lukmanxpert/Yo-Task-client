import { PuffLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <PuffLoader
                color="#ff0000"
                loading
                size={80}
                speedMultiplier={1}
            />
        </div>
    );
};

export default Loading;