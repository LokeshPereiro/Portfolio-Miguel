import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Lastest <br /> Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium necessitatibus earum quaerat delectus atque illo
                voluptatem adipisci exercitationem soluta repellendus! Earum,
                iure! Tempore asperiores fugiat adipisci dolor ducimus explicabo
                culpa?
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* Image */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-300"></div>
              {/* img */}
              <img
                src={Img1}
                alt="Img 1"
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* Pretitle */}
              <div className="group-hover:bottom-24 absolute -bottom-full left-12 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="group-hover:bottom-14 absolute -bottom-full left-12 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project title</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col items-center justify-end gap-y-10"
          >
            {/* Multiple-Images */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-300"></div>
              {/* img */}
              <img
                src={Img2}
                alt="Img 1"
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* Pretitle */}
              <div className="group-hover:bottom-24 absolute -bottom-full left-12 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="group-hover:bottom-14 absolute -bottom-full left-12 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project title</span>
              </div>
            </div>

            {/* Multiple-Images */}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-300"></div>
              <img
                src={Img3}
                alt="Img 1"
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* Pretitle */}
              <div className="group-hover:bottom-24 absolute -bottom-full left-12 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="group-hover:bottom-14 absolute -bottom-full left-12 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
