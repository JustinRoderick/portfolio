export const projects = [
  {
    name: 'OptiVAD',
    duration: 'Aug 2024 - May 2025',
    description: {
      paragraph:
        'A medical software application that determines optimal cannula positioning for Left Ventricle Assist Devices to minimize post-implant complications, like strokes. Built using TotalSegmentator and the nnUNet architecture to automate segmentations from CT scans.',
      tags: ['Next.js', 'TypeScript', 'tRPC', 'Drizzle', 'Docker', 'AWS'],
    },
    logo: '',
    image: '/optivad.png',
    link: 'https://github.com/Orlando-Health-Strategic-Innovations/optiVAD',
  },
  {
    name: 'Slicer',
    duration: '2024',
    description: {
      paragraph:
        'Inventory management system for restuarants to efficiently track inventory and orders.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    logo: '',
    image: '/slicer.png',
    link: 'https://github.com/POOSDSpring2024/LargeProject',
  },
  {
    name: 'Personal Cloud Storage',
    duration: '2025',
    description: {
      paragraph:
        'Personal cloud storage system for storing files and documents. Made to be a free Google Drive alternative for me and my family.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    logo: '',
    image: '/personal-cloud-storage.png',
    link: 'https://github.com/JustinRoderick/personal-cloud-storage',
  },
  {
    name: 'Portfolio',
    duration: '2024',
    description: {
      paragraph: 'My portfolio built using Next.js and Tailwind CSS.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    logo: '',
    image: '/portfolio.png',
    link: 'https://github.com/JustinRoderick/portfolio',
  },
];

export const experience = [
  {
    company: 'Orlando Health',
    role: 'Senior Capstone Project',
    date: 'Aug. 2024 – May. 2025',
    description: [
      'Worked with a small group of developers to create software that helps determine the optimal angle and position of the cannula from a Left Ventricle Assist Device to limit complications after the device is implanted, such as strokes.',
      'Set up a Next.js Monorepo utilizing modern frameworks like tRPC, Drizzle, and Zod to maintain type safety, and used Turborepo to speed up dev server start times by 76%.',
      'Created a CI/CD pipeline to automatically update and integrate changes to Docker containers hosted using AWS EC2 instances.',
      "Set up backend containers for tasks such as using the TotalSegmentator CLI tool to automate the segmentation of a patient's aorta based on their CT scans.",
      'Finalist in the UCF Senior Design Showcase event.',
    ],
    logo: '',
    technologies: ['Next.js', 'tRPC', 'Drizzle', 'Docker', 'AWS', 'TypeScript'],
  },
  {
    company: 'Freelance Web Developer',
    role: 'Web Developer',
    date: 'May. 2024 – Present',
    description: [
      'Developed custom web solutions for clients across various industries.',
      'Built responsive, modern websites using React, Next.js, and Tailwind CSS.',
      'Implemented SEO best practices and performance optimizations.',
    ],
    logo: '',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    company: 'Knight Hacks',
    role: 'Dev Team',
    date: 'Aug. 2023 – May. 2025',
    description: [
      'Collaborated with the operations team to plan and organize hackathons and other Knight Hacks events.',
      'These events include workshops that taught important Software Development topics such as OOP, Git, and Full-Stack development.',
    ],
    logo: '',
    technologies: ['JavaScript', 'React', 'Node.js', 'Git'],
  },
];
