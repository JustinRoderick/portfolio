"use client"

export default function About() {
  return (
    <section className="flex items-start justify-center pt-48 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-6">
        <h2 className="text-4xl font-bold text-balance mb-8 text-cyan-50">About Me</h2>

        <div className="space-y-4 text-lg leading-relaxed text-slate-300">
          <p>
            I'm a passionate full-stack developer with a focus on creating innovative solutions that make a real-world
            impact. My experience spans from healthcare technology to community-driven development initiatives.
          </p>

          <p>
            Currently, I'm working on cutting-edge projects that combine modern web technologies with practical
            applications. I specialize in building scalable, type-safe applications using Next.js, TypeScript, and
            modern development tools.
          </p>

          <p>
            When I'm not coding, I enjoy contributing to the developer community through hackathons and workshops,
            helping others learn and grow in their software development journey.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-50">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "tRPC", "Drizzle", "Docker", "AWS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-800 text-cyan-100 rounded-lg text-sm font-medium border border-slate-700"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
