const Banner = ({ text, imageUrl }) => {
    return (
      <div className="banner relative">
        <img src={imageUrl} alt="Banner Image" className="w-full object-cover min-h-80vh" />
        <div className="text-white text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {text}
        </div>
      </div>
    );
  };
  
  export default Banner;
  