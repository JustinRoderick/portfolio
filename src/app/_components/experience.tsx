
"use client"

import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ExperienceItem {
  company: string
  role: string
  date: string
  description: string[]
  logo: string
  technologies?: string[]
}

interface ExperienceProps {
  experience: ExperienceItem[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-balance mb-12 text-cyan-50">Experience</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-400 hidden sm:block" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-0 sm:pl-8">
                <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-cyan-400 border-4 border-fuchsia-950 shadow-[0_0_10px_rgba(34,211,238,0.6)] hidden sm:block -translate-x-[5px]" />

                <Card className="group transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:border-cyan-400 border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm">
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <h3 className="text-2xl font-bold text-balance text-cyan-50">{item.role}</h3>
                        <span className="text-sm text-slate-400 whitespace-nowrap">{item.date}</span>
                      </div>
                      <p className="text-lg font-medium text-cyan-400">{item.company}</p>
                    </div>

                    <ul className="space-y-2 list-disc list-inside text-slate-300">
                      {item.description.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="leading-relaxed">
                          <span className="ml-2">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        <TooltipProvider>
                          {item.technologies.map((tech, techIndex) => (
                            <Tooltip key={techIndex}>
                              <TooltipTrigger asChild>
                                <div className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors border border-slate-700">
                                  <span className="text-xs font-mono text-cyan-100">
                                    {tech.slice(0, 2).toUpperCase()}
                                  </span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{tech}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
