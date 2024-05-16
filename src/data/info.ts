import { IBlog, IExperience, IProject, ISkill } from '@types';

export const info = {
	baseUrl: 'https://vonkprogramming.nl',
	name: 'Lars Vonk',
	jobDescription1: 'Software enthusiast',
	jobDescription2: 'Code quality advocate',
	description: `
		I am an experienced developer with experience in Javascript and Python. I value code quality and continuous learning as can be read in my blogs.
	`,
	about: `
		I am an experienced developer with experience in javascript and python. I value code quality and continuous learning as can be read in my blogs. In my free time I like to work on side projects and learn new technologies. I am currently studying for a master's degree in computer systems and networks at the Warsaw University of Technology.
	`,
	keywords: 'developer, javascript, python, code quality, blogs',
	blogs: [
		{
			id: 4,
			title: 'Taking notes, a real superpower',
			description: `
				Also experience forgetfulness every now and then? There is a solution! A superpower that is available to everyone, taking notes. In this blog post I will discuss how taking notes has changed my ability to remember.
			`,
			date: '2024-05-17',
			link: '/blogs/taking-notes',
		},
		{
			id: 3,
			title: 'Small efficiencies add up',
			description: `
				Working fast and efficient is important. Doing more in less time while impressing your colleagues is amazing. I will dive into what small and easy improvements every developer can make to work more efficiently and save time in the long run which can be spent on other things (most likely more coding!)
			`,
			date: '2024-05-11',
			link: '/blogs/small-efficiencies',
		},
		{
			id: 2,
			title: 'Learning sustainably',
			description: `
				Continuous learning is very important in the world of software engineering. But a pitfall a lot of people encounter is that they cannot stick to it. In this blog post I will delve into my personal journey with learning and my findings and tips.
			`,
			date: '2024-05-07',
			link: '/blogs/learning-sustainably',
		},
		{
			id: 1,
			title: 'How to achieve code excellence',
			description: `
				What are the key principles of code excellence? What rules to adhere to and what tools to use? This blog post will delve deep into the world of writing excellent code, click read more to find out.
			`,
			date: '2024-04-24',
			link: '/blogs/code-excellence',
		},
	] as IBlog[],

	skills: [
		{
			title: 'Vue',
			years: 6,
			logo: '/assets/svg/vue.svg',
			link: 'https://vuejs.org/',
			featured: true,
		},
		{
			title: 'Chart.js',
			years: 6,
			logo: '/assets/svg/chartjs.svg',
			link: 'https://www.chartjs.org/',
			featured: true,
		},
		{
			title: 'Express.js',
			years: 5,
			logo: '/assets/svg/express.svg',
			link: 'https://expressjs.com/',
			featured: true,
		},
		{
			title: 'React',
			years: 5,
			logo: '/assets/svg/react.svg',
			link: 'https://reactjs.org/',
			featured: true,
		},
		{
			title: 'MongoDB',
			years: 4,
			logo: '/assets/svg/mongodb.svg',
			link: 'https://www.mongodb.com/',

			featured: true,
		},
		{
			title: 'Jest',
			years: 4,
			logo: '/assets/svg/jest.svg',
			link: 'https://jestjs.io/',

			featured: false,
		},
		{
			title: 'Docker',
			years: 4,
			logo: '/assets/svg/docker.svg',
			link: 'https://www.docker.com/',

			featured: true,
		},
		{
			title: 'Nginx',
			years: 3,
			logo: '/assets/svg/nginx.svg',
			link: 'https://www.nginx.com/',

			featured: true,
		},
		{
			title: 'Cypress',
			years: 3,
			logo: '/assets/svg/cypress.svg',
			link: 'https://www.cypress.io/',

			featured: false,
		},
		{
			title: 'Ionic',
			years: 3,
			logo: '/assets/svg/ionic.svg',
			link: 'https://ionicframework.com/',
			featured: false,
		},
		{
			title: 'Sass',
			years: 2,
			logo: '/assets/svg/sass.svg',
			link: 'https://sass-lang.com/',
			featured: false,
		},
		{
			title: 'ESLint',
			years: 2,
			logo: '/assets/svg/eslint.svg',
			link: 'https://eslint.org/',
			featured: true,
		},
		{
			title: 'Prisma',
			years: 2,
			logo: '/assets/svg/prisma.svg',
			link: 'https://www.prisma.io/',
			featured: false,
		},
		{
			title: 'Lit',
			years: 2,
			logo: '/assets/svg/lit.svg',
			link: 'https://lit.dev/',
			featured: true,
		},
		{
			title: 'Javascript',
			years: 9,
			logo: '/assets/svg/javascript.svg',
			link: 'https://www.javascript.com/',
			featured: true,
		},
		{
			title: 'Python',
			years: 6,
			logo: '/assets/svg/python.svg',
			link: 'https://www.python.org/',
			featured: true,
		},
		{
			title: 'Typescript',
			years: 5,
			logo: '/assets/svg/typescript.svg',
			link: 'https://www.typescriptlang.org/',
			featured: false,
		},
		{
			title: 'node.js',
			years: 5,
			logo: '/assets/svg/nodejs.svg',
			link: 'https://nodejs.org/',
			featured: true,
		},
		{
			title: 'Linux',
			years: 3,
			logo: '/assets/svg/linux.svg',
			link: 'https://www.linux.org/',
			featured: false,
		},
		{
			title: 'Redux',
			years: 3,
			logo: '/assets/svg/redux.svg',
			link: 'https://redux.js.org/',
			featured: false,
		},
		{
			title: 'Sass',
			years: 2,
			logo: '/assets/svg/sass.svg',
			link: 'https://sass-lang.com/',
			featured: false,
		},
		{
			title: 'i18next',
			years: 2,
			logo: '/assets/svg/i18next.svg',
			link: 'https://www.i18next.com/',
			featured: false,
		},
		{
			title: 'Lit',
			years: 2,
			logo: '/assets/svg/lit.svg',
			link: 'https://lit.dev/',
			featured: false,
		},
		{
			title: 'Stripe',
			years: 1,
			logo: '/assets/svg/stripe.svg',
			link: 'https://stripe.com/',
			featured: false,
		},
		{
			title: 'Payload',
			years: 1,
			logo: '/assets/svg/payload.svg',
			link: 'https://payloadcms.com/',
			featured: false,
		},
		{
			title: 'Astro',
			years: 1,
			logo: '/assets/svg/astro.svg',
			link: 'https://astro.build/',
			featured: false,
		},
		{
			title: 'Nest.js',
			years: 1,
			logo: '/assets/svg/nestjs.svg',
			link: 'https://nestjs.com/',
			featured: false,
		},
		{
			title: 'Strapi',
			years: 1,
			logo: '/assets/svg/strapi.svg',
			link: 'https://www.strapi.io/',
			featured: false,
		},
		{
			title: 'Electron',
			years: 1,
			logo: '/assets/svg/electron.svg',
			link: 'https://www.electronjs.org/',
			featured: false,
		},
		{
			title: 'Javascript',
			years: 9,
			logo: '/assets/svg/javascript.svg',
			link: 'https://www.javascript.com/',
			featured: false,
		},
		{
			title: 'HTML',
			years: 9,
			logo: '/assets/svg/html.svg',
			link: 'https://html.spec.whatwg.org/',
			featured: false,
		},
		{
			title: 'CSS',
			years: 9,
			logo: '/assets/svg/css.svg',
			link: 'https://www.w3.org/Style/CSS/Overview.en.html',
			featured: false,
		},
		{
			title: 'npm',
			years: 5,
			logo: '/assets/svg/npm.svg',
			link: 'https://www.npmjs.com/',
			featured: false,
		},
		{
			title: 'php',
			years: 5,
			logo: '/assets/svg/php.svg',
			link: 'https://www.php.net/',
			featured: false,
		},
		{
			title: 'C',
			years: 2,
			logo: '/assets/svg/c.svg',
			link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
			featured: false,
		},
		{
			title: 'Go',
			years: 1,
			logo: '/assets/svg/go.svg',
			link: 'https://golang.org/',
			featured: false,
		},
	] as ISkill[],

	experience: [
		{
			name: 'ING',
			location: 'Amsterdam, Noord-Holland, Nederland',
			startDate: 'Apr 2022',
			endDate: 'Oct 2023',
			description: [
				"The role at 'ING', in Amsterdam, North Holland, Netherlands, began in April 2022 and ended in September 2023. It primarily involved serving as a full-stack developer, working on various interfaces that are utilized by ING, employing the Lit element framework. In addition to these duties, for a certain period, the role also encompassed serving as a product owner. This required overseeing project timelines, prioritizing features, collaborating with stakeholders, and making key decisions about product direction. This multi-faceted role demonstrates a blend of technical acumen and leadership ability.",
			],
			link: 'https://www.ing.nl/',
		},
		{
			name: 'Quintor',
			location: 'Amersfoort, Utrecht, Nederland',
			startDate: 'Oct 2020',
			endDate: 'Oct 2023',
			description: [
				"At 'Quintor' in Amersfoort, Utrecht, Netherlands, from October 2020 to October 2023, the role mainly involved working on various software development projects for large clients like ING and different government entities. As part of the experience at Quintor, a traineeship was also completed. This program emphasized learning and implementing best practices for code quality through testing and linting methodologies, which played a significant role in the coding projects.",
			],
			link: 'https://www.quintor.nl/',
		},

		{
			name: 'SVB',
			location: 'Amstelveen, Noord-Holland, Nederland',
			startDate: 'Apr 2021',
			endDate: 'Apr 2022',
			description: [
				"At 'SVB', based in Amstelveen, North Holland, Netherlands, the role took place from April 2021 to April 2022. The primary responsibility involved programming in JavaScript, utilizing the Angular framework. An important part of the job was managing a significant transition, migrating an existing system from AngularJS to Angular. This migration required deep understanding of both frameworks, and extensive planning to ensure a seamless transition with minimal disruption. In addition to development work, the role also entailed working on pipelines, which required careful oversight and management to ensure a smooth, efficient workflow and continuous delivery.",
			],
			link: 'https://www.svb.nl/',
		},
		{
			name: 'J-Tax Automotive',
			location: 'Almere, Flevoland, Nederland',
			startDate: 'Jun 2021',
			endDate: 'Present',
			description: [
				"Joining 'J-Tax Automotive' situated in Almere, Flevoland, Netherlands, from June 2021, I undertook the significant responsibility of crafting bespoke software tailored for valuation reports. This marked a pivotal milestone as my first major independent project as a freelancer. The project harnessed the power of Vue.js, ExpressJS, and MongoDB to seamlessly develop a comprehensive solution. The outcome of this endeavor was transformative, as the client now reaps the benefit of generating up to four times the number of reports, highlighting the substantial impact of streamlined and efficient software implementation.",
			],
			link: 'https://www.j-taxautomotive.nl//',
		},
		{
			name: 'MedWeb',
			location: 'Hilversum, Noord-Holland, Nederland',
			startDate: 'Sep 2019',
			endDate: 'Aug 2020',
			description: [
				"At 'MedWeb' in Hilversum, North Holland, Netherlands, where I was engaged from September 2019 to August 2020, I played a key role in developing a roster application for medical professionals and updating the 'Medspace' application using VueJS/JavaScript, IBM Notes, IBM Domino Designer, CSS, and HTML. During this time, I also focused on enhancing data visualization capabilities by incorporating Chart.js, enabling clients to derive valuable insights from their data. Working closely with LotusScript, I contributed to the application's functionality, translating intricate data into meaningful charts that empowered medical specialists and doctors to make informed decisions based on clear, visualized information.",
			],
			link: 'https://www.medweb.nl/',
		},
		{
			name: 'Floriade',
			location: 'Almere, Flevoland, Nederland',
			startDate: 'Sep 2018',
			endDate: 'Jun 2019',
			description: [
				"At 'Floriade', based in Almere, Flevoland, Netherlands, the role was from September 2018 to January 2019. The responsibilities included contributing to a specific segment of the Floriade project, utilizing skills in PHP, CSS, MySQL, and HTML to enhance its digital presence. The Floriade exposition, held in Almere, is a renowned international horticultural exhibition that showcases innovative landscaping and sustainable gardening practices. It serves as a platform for sharing ideas, technologies, and designs related to urban development, horticulture, and environmental sustainability. The exposition attracts visitors from around the world and offers a unique opportunity to explore cutting-edge concepts in urban greening and ecological urban planning",
			],
			link: 'https://www.floriade.com/',
		},
		{
			name: 'Sanoma',
			location: 'Hoofddorp, Noord-Holland, Nederland',
			startDate: 'Sep 2017',
			endDate: 'Jun 2018',
			description: [
				"At 'Sanoma', based in Hoofddorp, North Holland, Netherlands, the role was performed from September 2017 to June 2018. The responsibilities included developing software for advertising in PHP, CSS, MySQL, and HTML. The primary focus of the project revolved around utilizing Chart.js to visualize and present data in a variety of advanced chart formats. These advanced charts added a dynamic dimension to the advertising platform, enabling the effective representation of complex data in an easily understandable manner.",
			],
			link: 'https://www.sanoma.com/',
		},
		{
			name: 'Student Aan Huis',
			location: 'Bussum, Noord-Holland, Nederland',
			startDate: 'Jun 2017',
			endDate: 'Mar 2018',
			description: [
				"At 'Student Aan Huis', based in Utrecht, North Holland, Netherlands, the role involved assisting individuals that were customer's of 'Student Aan Huis' with their computer issues, from printer setups to restoring entire Windows systems.",
			],
			link: 'https://www.studentaanhuis.nl/',
		},
	] as IExperience[],

	education: [
		{
			name: "Master's degree, Computer systems and networks",
			location: 'Warsaw, Mazowieckie, Poland',
			startDate: '2023',
			endDate: 'Now',
			description: [
				"Master's degree, Computer systems and networks",
				'After working for 3 years I have decided to get back to studying to get more insight into computer science and get international experience. I am currently studying at the Warsaw University of Technology.',
			],
		},
		{
			name: 'HBO-ICT, Windesheim Flevoland',
			location: 'Almere, Flevoland, Nederland',
			startDate: '2016',
			endDate: '2020',
			description: [
				"Bachelor's degree, Software Engineering",
				'After my highschool I decided to study software engineering at Windesheim Flevoland. I have learned a lot about software engineering and have worked on various projects. I have also done a minor in entrepreneurship.',
			],
		},
		{
			name: 'Cambridge English: C2',
			location: 'Online',
			startDate: 'Aug 2016',
			endDate: 'Aug 2016',
			description: [
				'A certificate proving my English proficiency at the highest level. I have taken the test to prove my English proficiency and to be able to study in English.',
				'Issued by Cambridge English Language Assessment.',
			],
		},
		{
			name: 'AWS cloud practitioner',
			location: 'Online',
			startDate: 'Feb 2021',
			endDate: 'Feb 2021',
			description: ['AWS cloud practitioner certification', 'Issued by Amazon Web Services.'],
		},
		{
			name: 'Certified scrum master',
			location: 'Online',
			startDate: 'Dec 2022',
			endDate: 'Dec 2022',
			description: [
				'Basic understanding of the scrum framework and how to work and/or lead in a scrum team.',
				'Issued by ScrumFoundation.',
			],
		},
		{
			name: 'Graph Developer - Associate',
			location: 'Online',
			startDate: 'Apr 2022',
			endDate: 'Apr 2022',
			description: ['Basic online course learning GraphQL from the Apollo team.', 'Issued by Apollo.'],
		},
		{
			name: 'Various Udemy courses',
			location: 'Online',
			startDate: 'Jul 2020',
			endDate: 'Present',
			description: [
				'I like to keep my skills up to date by taking various courses on Udemy. I have completed courses on Vue.js, React, Node.js, MongoDB, Express.js, and many more.',
				'Issued by Udemy.',
			],
		},
	] as IExperience[],

	socialMedia: {
		stackoverflow: 'https://stackoverflow.com/users/10104786/lars-vonk',
		github: 'https://github.com/thebetar',
		email: 'mailto:info@vonkprogramming.nl',
		linkedin: 'https://www.linkedin.com/in/lars-v-82455612a/',
	},

	projects: [
		{
			title: 'x86 assembly',
			isFeatured: true,
			thumbnail: '/assets/images/x86-assembly.png',
			githubUrl: 'https://github.com/thebetar/x86-assembly',
		},
		{
			title: 'Risc-V assembly',
			isFeatured: true,
			thumbnail: '/assets/images/risc-v-assembly.webp',
			githubUrl: 'https://github.com/thebetar/RISC-V-assembly',
		},

		{
			title: 'AssistAI',
			isFeatured: true,
			thumbnail: '/assets/images/assistai.png',
			githubUrl: 'https://github.com/thebetar/AssistAI',
		},
		{
			title: 'Voice calculator',
			isFeatured: true,
			thumbnail: '/assets/images/speechcalculator.png',
			githubUrl: 'https://github.com/thebetar/IASRProject',
		},
		{
			title: 'Resilient hosting',
			isFeatured: true,
			thumbnail: '/assets/images/resilienthosting.webp',
			githubUrl: 'https://github.com/thebetar/ResillientHosting',
		},
		{
			title: 'Advent of code',
			isFeatured: true,
			thumbnail: '/assets/images/adventofcode.webp',
			githubUrl: 'https://github.com/thebetar/AdventOfCode',
			liveUrl: 'https://adventofcode.com/',
		},
		{
			title: 'Voice calculator',
			isFeatured: true,
			thumbnail: '/assets/images/voicecalculator.webp',
			githubUrl: 'https://github.com/thebetar/IASRProject',
		},
		{
			title: 'Bun vs Node',
			isFeatured: true,
			thumbnail: '/assets/images/bunvsnode.webp',
			githubUrl: 'https://github.com/thebetar/BunVsNode',
		},
		{
			title: 'FietsTracker',
			isFeatured: true,
			thumbnail: '/assets/images/fietstrekker.webp',
			githubUrl: 'https://github.com/thebetar/fietsTracker',
		},
		{
			title: 'Klets',
			isFeatured: true,
			thumbnail: '/assets/images/klets.webp',
			liveUrl: 'https://vonkprogramming.nl',
		},
		{
			title: 'Deet',
			isFeatured: true,
			thumbnail: '/assets/images/deet.webp',
			liveUrl: 'https://play.google.com/store/apps/details?id=nl.vonkprogramming.deetcalendar',
		},
		{
			title: 'Fyndyr',
			isFeatured: true,
			thumbnail: '/assets/images/fyndyr.webp',
			githubUrl: 'https://github.com/thebetar/Fyndyr',
			liveUrl: 'https://play.google.com/store/apps/details?id=nl.vonkprogramming.fyndyr',
		},
	] as IProject[],
};
