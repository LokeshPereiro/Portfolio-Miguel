import UserImg from "../assets/avatar.svg";
import { FaWhatsapp, FaYoutube, FaTelegram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[76vh]" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left lg:items-center lg:gap-x-12">
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Miguel <span>Martínez-Falero</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4">I am a </span>
              <TypeAnimation
                sequence={["Doctor", 2000, "Weaver", 2000, "Farmer"]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 mx-w-lg mx-auto lg:mx-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo quod ducimus ipsum, soluta corrupti quasi exercitationem
              mollitia amet temporibus quibusdam totam hic dolore harum
              perferendis facere esse omnis animi est!
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <Link to="#" className="text-gradient btn-link">
                My Products
              </Link>
            </div>
            {/* Social Medias */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto">
              <Link to="#">
                <FaWhatsapp />
              </Link>
              <Link to="#">
                <FaYoutube />
              </Link>
              <Link to="#">
                <FaTelegram />
              </Link>
            </div>
          </div>
          {/* Imge */}
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto">
            <img src={UserImg} alt="User Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
