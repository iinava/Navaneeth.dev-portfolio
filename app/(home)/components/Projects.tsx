import React from "react";
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandPrisma } from "react-icons/tb";
import Title from "./Title";
import { Link } from "lucide-react";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
export default function Projects() {
  const projects = [
    {
      title: "Realesto- Real Estate app with Real time chat",
      tech: [FaReact, SiExpress,TbBrandPrisma, FaNodeJs],
      link: "https://github.com/iinava/RealEsto",
      cover: "/Realesto.png",
      background: "bg-lime-500",
    },
    {
      title: "Grow-Crowdfunding platform",
      tech: [FaReact, DiDjango, GrMysql],
      link: "https://github.com/iinava/Grow-Investment-Crowdfunding-platform",
      cover: "/grow.png",
      background: "bg-indigo-500",
    },
    {
      title: "Petfind E-commerce",
      tech: [FaReact, DiDjango, GrMysql],
      link: "https://github.com/iinava/Petfind-Ecommerce",
      cover: "/petfind.png",
      background: "bg-green-500",
    },
    {
      title: "Nova-Viediostreaming(Backend)",
      tech: [FaReact, SiExpress, FaNodeJs],
      link: "https://github.com/iinava/nova-vidstream-backend-mongo",
      cover: "/mongo.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0 ">
      <Title
        text="projects"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className="dnone">
                <div className="space-y-2 underline font-bold bg-black rounded-full px-8 py-2 ">
                  <h1>{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, index) => {
                      return <Icon className="w-5 h-5" key={index} />;
                    })}
                  </div>
                </div>
              </div>
              <a href={project.link} key={index}>
                <div className={cn("p-1 rounded-md ", project.background)}>
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-[full]  h-[200px] sm:h-[350px] bg-cover bg-center space-y-5 cursor-pointer"
                  >
                    <div className="space-y-5 font-bold bg-black rounded-full px-8 py-2 ">
                      <h1>{project.title}</h1>
                      <div className="flex items-center gap-5">
                        {project.tech.map((Icon, index) => {
                          return <Icon className="w-8 h-8" key={index} />;
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
