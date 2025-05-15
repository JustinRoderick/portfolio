import { experience } from '@/consts/index';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground">
              A summary of my professional journey and accomplishments.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="flex flex-col h-full transition-all duration-300 bg-transparent border-none hover:bg-none hover:shadow-[0_0_6px_rgba(0,0,0,0.5)]"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-white font-semibold">
                      {exp.company}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {exp.role} | {exp.date}
                    </CardDescription>
                  </div>
                  {exp.logo && (
                    <div className="ml-4 flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="rounded-md object-contain"
                      />
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
              {/* <CardFooter>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
