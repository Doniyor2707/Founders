// img
import Loader1 from "../../assets/images/LoaderImg.png";
import Loader2 from "../../assets/images/LoaderImg2.png";
import "./ImageLoader.css";

const ImageLoader = () => {
  return (
    <div className="loader-container">
      <div className="image-loader">
        <img src={Loader1} alt="First loader" className="loader-image first" />
        <img
          src={Loader2}
          alt="Second loader"
          className="loader-image second"
        />
      </div>
    </div>
  );
};

export default ImageLoader;
