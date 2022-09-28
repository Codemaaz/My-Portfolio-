import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoLogoGithub, IoMenu } from "react-icons/io5";
import { AiOutlineCopyright } from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";

import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        {/* START navigation bar  */}

        <nav className=" w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className=" text-lg text-slate-200 font-medium">Sk Maaz</p>
            <div className=" hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Home
              </a>
              <a
                href="#about"
                className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                About
              </a>
              <a
                href="#project"
                className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#contact"
                className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </a>

              {/* Download CV button */}

              <a
                href="https://drive.google.com/file/d/1_YoJ7WTMcvIwaWRE6ngHdiqAG_gRSt0e/view?usp=sharing"
                className=" ml-auto text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              >
                GET CV
              </a>
            </div>

            {/* START toggle menu  */}

            <motion.div
              whileTap={{ scale: 0.5 }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className=" text-2xl text-textBase" />
            </motion.div>
            {isActive && (
              <div className=" p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
                <a
                  href="#home"
                  className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#project"
                  className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>

                <a
                  href="https://drive.google.com/file/d/1_YoJ7WTMcvIwaWRE6ngHdiqAG_gRSt0e/view?usp=sharing"
                  className="text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  GET CV
                </a>
              </div>
            )}

            {/* END toggle menu  */}
          </div>
        </nav>
        {/*END navigation bar  */}

        {/* START background design  */}

        <div className="relative h-screen w-screen" id="home">
          <Spline scene="https://prod.spline.design/xtXRAlaXhZR1Akp3/scene.splinecode" />
        </div>

        {/* main sections  */}

        <main className="w-[80%] mt-5">
          {/* about section  */}
          <section
            className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            {/* image box */}
            <div className=" w-full h-420 flex items-center justify-center">
              <div className=" w-275 h-340 border rounded-md relative ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-a2774.appspot.com/o/me.jpg?alt=media&token=6c6aafe7-e396-4c47-9b4d-60ec445d0306"
                  alt="my img"
                  className=" w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* content box  */}

            <div className=" w-full h-full flex flex-col items-center justify-center">
              <p className=" text-lg text-textBase text-center">
                I am Maaz Shaikh from dhule/Maharashtra, pursuing MCA in Sundip
                University Nashik.I like solving puzzles, and my strength is I'm
                honest, punctual and self motivated. I'm also a quick learner,
                hard working.
              </p>
            </div>
          </section>

          {/* timeline section  */}

          <section className=" w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21,24,31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21,24,31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21,24,31)", color: "#888" }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.grade}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          {/* project section  */}

          <section
            className=" flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="project"
          >
            {Projects &&
              Projects.map((n) => (
                <div
                  key={n.Pid}
                  className=" border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className=" text-lg text-textBase font-medium uppercase">
                    {n.Pname.length > 25
                      ? `${n.Pname.slice(0, 25)}...`
                      : n.Pname}
                  </p>
                  <img
                    src={n.PimageSrc}
                    alt="Project Images"
                    className=" w-full h-full object-cover rounded-md my-4"
                  />
                  <div className=" flex flex-1 items-center justify-between">
                    <p className=" text-lg text-gray-300 ">
                      Technologies{" "}
                      <span className=" block text-sm text-gray-500">
                        {n.Ptechs}
                      </span>{" "}
                    </p>
                    <a href={n.github}>
                      <div>
                        <IoLogoGithub className=" text-textBase text-3xl cursor-pointer" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
          </section>

          {/* contact section  */}

          <section
            id="contact"
            className=" flex flex-col items-center justify-center w-full my-24"
          >
            <p className=" text-2xl text-gray-400 capitalize">Contact Me</p>
            <div className=" flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <a
                    key={n.id}
                    href={n.link}
                    className=" w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconsSrc}
                    <p className=" text-lg text-textBase ">{n.name}</p>
                  </a>
                ))}
            </div>
          </section>
          <section>
            <p className="flex items-center justify-center text-textBase"><AiOutlineCopyright/> 2022 All Right Reserved Maaz Shaikh</p>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
