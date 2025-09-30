"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Project {
  name: string
  duration: string
  description: {
    paragraph: string
    tags: string[]
  }
  logo: string
  image: string
  link: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-balance mb-12 text-cyan-50">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:border-cyan-400 border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm"
            >
              <div className="p-6 space-y-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  {project.image ? (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <span className="text-slate-400">Project Image</span>
                    </div>
                  )}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-balance text-cyan-50">{project.name || "Project Name"}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg hover:bg-slate-800 transition-colors text-cyan-100"
                      aria-label="View on GitHub"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {project.duration && <p className="text-sm text-slate-400">{project.duration}</p>}

                <p className="text-slate-300 leading-relaxed">
                  {project.description.paragraph || "Project description goes here."}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <TooltipProvider>
                    {project.description.tags.map((tech, techIndex) => (
                      <Tooltip key={techIndex}>
                        <TooltipTrigger asChild>
                          <div className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors border border-slate-700">
                            <span className="text-xs font-mono text-cyan-100">{tech.slice(0, 2).toUpperCase()}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tech}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
