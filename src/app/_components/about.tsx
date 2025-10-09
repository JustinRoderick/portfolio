'use client';

export default function About() {
  return (
    <section className="flex items-start justify-center px-6 py-8 lg:pt-48 lg:pb-24 lg:px-8">
      <div className="max-w-3xl w-full space-y-6">
        <h2 className="text-4xl font-bold text-balance mb-8 text-cyan-50">
          About Me
        </h2>

        <div className="space-y-4 text-lg leading-relaxed text-slate-300">
          <p>
            Hey! I&apos;m a full-stack software engineer who&apos;s passionate
            about AI/ML and MedTech. I love the idea of building things that not
            only push the limits of tech but also make a real difference in
            people&apos;s lives.
          </p>

          <p>
            Most of my projects are built with tools I&apos;m really comfortable
            with, like TypeScript, Next.js, Docker, and AWS. I enjoy working on
            everything from the front-end to the back-end, and I&apos;m always
            looking for new ways to learn and improve.
          </p>

          <p>
            When I&apos;m not coding, I enjoy contributing to the developer
            community through hackathons and workshops, helping others learn and
            grow in their software development journey.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-50">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Next.js',
              'React',
              'TypeScript',
              'Node.js',
              'Tailwind CSS',
              'tRPC',
              'Drizzle',
              'Docker',
              'AWS',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800 text-cyan-100 rounded-lg text-sm font-medium border border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
