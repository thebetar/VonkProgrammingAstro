export const info = {
  baseUrl: "https://vonkprogramming.nl",
  name: "Lars Vonk",
  jobDescription: "Software enthousiast | Code quality advocate",
  about: `
    As a software enthusiast, I value quality code above all. My commitment extends to robust linting, rigorous unit testing, adherence to code standards, and efficient pipeline management. Every line of code I write embodies my dedication to excellence and precision in software development.
  `,

  experience: [
    {
      name: 'ING',
      location: 'Amsterdam, Noord-Holland, Nederland',
      startDate: 'Apr 2022',
      endDate: 'Oct 2023',
      description: [
        'The role at \'ING\', in Amsterdam, North Holland, Netherlands, began in April 2022 and is still ongoing. It primarily involves serving as a full-stack developer, working on various interfaces that are utilized by ING, employing the Lit element framework. In addition to these duties, for a certain period, the role also encompassed serving as a product owner. This required overseeing project timelines, prioritizing features, collaborating with stakeholders, and making key decisions about product direction. This multi-faceted role demonstrates a blend of technical acumen and leadership ability.'
      ],
      link: 'https://www.ing.nl/'
    },
    {
      name: 'Quintor',
      location: 'Amersfoort, Utrecht, Nederland',
      startDate: 'Oct 2020',
      endDate: 'Oct 2023',
      description:[
        'At \'Quintor\' in Amersfoort, Utrecht, Netherlands, from October 2020 to October 2023, the role mainly involved working on various software development projects for large clients like ING and different government entities. As part of the experience at Quintor, a traineeship was also completed. This program emphasized learning and implementing best practices for code quality through testing and linting methodologies, which played a significant role in the coding projects.',
      ],
      link: 'https://www.quintor.nl/'
    },

    {
      name: 'SVB',
      location: 'Amstelveen, Noord-Holland, Nederland',
      startDate: 'Apr 2021',
      endDate: 'Apr 2022',
      description: [
        'At \'SVB\', based in Amstelveen, North Holland, Netherlands, the role took place from April 2021 to April 2022. The primary responsibility involved programming in JavaScript, utilizing the Angular framework. An important part of the job was managing a significant transition, migrating an existing system from AngularJS to Angular. This migration required deep understanding of both frameworks, and extensive planning to ensure a seamless transition with minimal disruption. In addition to development work, the role also entailed working on pipelines, which required careful oversight and management to ensure a smooth, efficient workflow and continuous delivery.'
      ],
      link: 'https://www.svb.nl/'
    },
    {
      name: 'J-Tax Automotive',
      location: 'Almere, Flevoland, Nederland',
      startDate: 'Jun 2021',
      endDate: 'Present',
      description: [
        '\'J-Tax Automotive\', based in Almere, Flevoland, Netherlands, has had a role since June 2021, which involves creating custom software for valuation reports using Vue.js, ExpressJS and MongoDB. '
      ],
      link: 'https://www.j-taxautomotive.nl//'
    },
    {
      name: 'MedWeb',
      location: 'Hilversum, Noord-Holland, Nederland',
      startDate: 'Sep 2019',
      endDate: 'Aug 2020',
      description: [
        '\'MedWeb\' is a Hilversum, North Holland, Netherlands-based company where the role was performed from September 2019 to August 2020. The responsibilities included working on a roster application for medical specialists and doctors and updating the "Medspace" application using VueJS/JavaScript, IBM Notes, IBM Domino designer, CSS, and HTML. '
      ],
      link: 'https://www.medweb.nl/'
    },
    {
      name: 'Floriade',
      location: 'Almere, Flevoland, Nederland',
      startDate: 'Sep 2018',
      endDate: 'Jun 2019',
      description: [
        'At \'Floriade\', based in Almere, Flevoland, Netherlands, the role was from September 2018 to January 2019. The responsibilities included working on a part of the Floriade project with PHP, CSS, MySQL, and HTML.',
      ],
      link: 'https://www.floriade.com/'
    },
    {
      name: 'Sanoma',
      location: 'Hoofddorp, Noord-Holland, Nederland',
      startDate: 'Sep 2017',
      endDate: 'Jun 2018',
      description: [
        'At \'Sanoma\', based in Hoofddorp, North Holland, Netherlands, the role was performed from September 2017 to June 2018. The responsibilities included developing software for advertising in PHP, CSS, MySQL, and HTML.',
      ],
      link: 'https://www.sanoma.com/'
    },
    {
      name: 'Student Aan Huis',
      location: 'Bussum, Noord-Holland, Nederland',
      startDate: 'Jun 2017',
      endDate: 'Mar 2018',
      description: [
        'At \'Student Aan Huis\', based in Bussum, North Holland, Netherlands, the role involved assisting individuals with their computer issues, from printer setups to restoring entire Windows systems.',
      ],
      link: 'https://www.studentaanhuis.nl/'
    },
  ],

  education: [
    {
      name: "HBO-ICT, Windesheim Flevoland",
      location: "Almere, Flevoland, Nederland",
      startDate: "2016",
      endDate: "2020",
      description: [
        "Bachelor's degree, Software Engineering",
      ],
    },
    {
      name: "AWS cloud practitioner",
      location: "Online",
      startDate: "Feb 2021",
      endDate: "Feb 2021",
      description: ["AWS cloud practitioner certification"],
    },
    {
      name: "Cambridge English: C2",
      location: "Online",
      startDate: "Aug 2016",
      endDate: "Aug 2016",
      description: ["Cambridge English: C2 Proficiency (CPE)"],
    },

    {
      name: "Certified scrum master",
      location: "Online",
      startDate: "Dec 2022",
      endDate: "Dec 2022",
      description: ["Cambridge English: C2 Proficiency (CPE)"],
    },
    {
      name: "Various Udemy courses",
      location: "Online",
      startDate: 'Jul 2020',
      endDate: 'Present',
      description: [
        'I like to keep my skills up to date by taking various courses on Udemy. I have completed courses on Vue.js, React, Node.js, MongoDB, Express.js, and many more.',
      ],
    },
  ],

  socialMedia: {
    stackoverflow: "https://stackoverflow.com/users/10104786/lars-vonk",
    github: "https://github.com/thebetar",
    email: "info@vonkprogramming.nl",
    linkedin: "https://www.linkedin.com/in/lars-v-82455612a/",
  },

  projects: [
    {
      title: "Deet",
      isFeatured: true,
      thumbnail: "/assets/images/deet.webp",
      liveUrl: "https://play.google.com/store/apps/details?id=nl.vonkprogramming.deetcalendar"
    },
    {
      title: "Fyndyr",
      isFeatured: true,
      thumbnail: "/assets/images/fyndyr.webp",
      liveUrl: "https://play.google.com/store/apps/details?id=nl.vonkprogramming.fyndyr"
    },
  ],
};
