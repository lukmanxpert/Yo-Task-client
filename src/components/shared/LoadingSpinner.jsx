import PacmanLoader from "react-spinners/PacmanLoader";

const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen ]'>
      <PacmanLoader
        color="#be185d"
        size={45}
      />
    </div>
  );
};

export default LoadingSpinner;