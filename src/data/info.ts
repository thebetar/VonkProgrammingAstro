import { IBlog, IExperience, IProject, ISkill, SkillType } from '@types';

enum BlogTags {
	Productivity = 'productivity',
	Development = 'development',
	Lifestyle = 'lifestyle',
	Innovation = 'innovation',
	Business = 'business',
	Career = 'career',
}

export const blogTags = [
	{
		name: BlogTags.Productivity,
		color: 'green',
	},
	{
		name: BlogTags.Lifestyle,
		color: 'blue',
	},
	{
		name: BlogTags.Development,
		color: 'purple',
	},
	{
		name: BlogTags.Innovation,
		color: 'red',
	},
	{
		name: BlogTags.Business,
		color: 'orange',
	},
	{
		name: BlogTags.Career,
		color: 'cyan',
	},
];

export function getTagColor(tag: string) {
	return blogTags.find(blogTag => blogTag.name === tag)?.color;
}

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
			id: 18,
			title: 'The magic of Large Language Models 🪄',
			description: `
				Large Language Models have taken the world by storm, but how do they actually work? In this blog post I will talk about the magic behind Large Language Models.
			`,
			tags: [BlogTags.Development, BlogTags.Innovation],
			date: '2024-11-12',
			link: '/blogs/large-language-models',
		},
		{
			id: 17,
			title: 'Google Chrome tips & tricks 🔎',
			description: `
				Are you using Google Chrome for browsing the web? In this blog post I will show you some tips and tricks that will help you get the most out of your browsing experience
			`,
			tags: [BlogTags.Productivity, BlogTags.Lifestyle],
			date: '2024-11-08',
			link: '/blogs/chrome-tips',
		},
		{
			id: 16,
			title: 'Unlocking the Full Power of Version Control 🚀',
			description: `
				Version control is a powerful tool that can help you manage your codebase more effectively. In this blog post, I'll discuss some advanced version control techniques that can help you unlock the full power of version control and take your development workflow to the next level.
			`,
			tags: [BlogTags.Development, BlogTags.Productivity],
			date: '2024-10-12',
			link: '/blogs/version-control',
		},
		{
			id: 15,
			title: 'The power of boredom 🤯',
			description: `
				Have you ever noticed that you come up with the best ideas when you are bored? In this blog post I will talk about the power of boredom and how you can use it to your advantage.
			`,
			tags: [BlogTags.Lifestyle, BlogTags.Productivity],
			date: '2024-09-21',
			link: '/blogs/being-bored',
		},
		{
			id: 14,
			title: 'Connected world 🌐',
			description: `
				In today's interconnected world, having a strong network is as crucial as being skilled, as connections can open doors to opportunities that talent alone might not. By leveraging both local and digital networks, you can enhance your professional reach and position yourself for greater success.
			`,
			tags: [BlogTags.Lifestyle, BlogTags.Career],
			date: '2024-08-31',
			link: '/blogs/connected-world',
		},
		{
			id: 13,
			title: 'Moving to Poland 🌍',
			description: `
				In this blog post I will describe my experience with moving from the Netherlands to Poland. I will describe the challenges I faced and how I tackled them and how I think someone else could tackle them just the same.
			`,
			tags: [BlogTags.Lifestyle, BlogTags.Career],
			date: '2024-08-10',
			link: '/blogs/moving-to-poland',
		},
		{
			id: 12,
			title: 'The degradation of code quality 📉',
			description: `
				Have you also noticed that software seems to have more and more bugs and big crashes seem to occur more often? In this blog post I will talk about the challenges that come with guaranteeing high code quality.
			`,
			tags: [BlogTags.Development, BlogTags.Innovation],
			date: '2024-07-27',
			link: '/blogs/degradation-code-quality',
		},
		{
			id: 11,
			title: 'The abstraction spectrum 🌈',
			description: `
				Developers often prefer to solve all their problems using code, sometimes however using a paid service or a no code solution is a better way to solve your problem faster. In this blog post I will talk about the considerations I make when solving a problem and where I think using abstract solutions like no code are justified.
			`,
			tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Business],
			date: '2024-07-20',
			link: '/blogs/abstraction-spectrum',
		},
		{
			id: 10,
			title: 'The viability of monoliths 🤫',
			description: `
				Is kubernetes really the greatest invention of all time? Are AWS and Azure really going to scale infinetely? Maybe there is still a place in this world for monoliths and dedicated servers. In this blog I talk about my views on this topic and how I think that monoliths are still a viable option for a lot of companies.
			`,
			tags: [BlogTags.Development],
			date: '2024-07-13',
			link: '/blogs/viability-of-monoliths',
		},
		{
			id: 9,
			title: 'Why is context important? 🤔',
			description: `
				Development teams are often too focussed on the products they work on directly and don't stop to consider who the users are and where the product fits in to the bigger system and what stacks are used that are closely related to the product. In this blog post I will talk about how I deal with understanding this context and how I am often able to communicate with team that work in completely different stacks.
			`,
			tags: [BlogTags.Development, BlogTags.Business, BlogTags.Career],
			date: '2024-07-05',
			link: '/blogs/connected-stacks',
		},
		{
			id: 8,
			title: 'The love of programming ❤️',
			description: `
				Do you have the feeling that programming full time as a job has reduced your appreciation of programming? Or are you just curious about the opinions of another lover of programming. In this blog I discuss why I love programming and how I will keep loving it.
			`,
			tags: [BlogTags.Development, BlogTags.Lifestyle, BlogTags.Innovation],
			date: '2024-06-28',
			link: '/blogs/love-programming',
		},
		{
			id: 7,
			title: 'The benefit of believing in yourself 🤩',
			description: `
				Why are all these motivational guru's so successful in conveying their message. I have also had a period in my life where I was susceptible to these kind of voices and what I have noticed; Is that it works very well in achieving more in life! It might sound weird because a lot of the time they also try to sell you some weird course which does not work. But the effect of believing that you will be able to achieve greatness is a very powerful 
			`,
			tags: [BlogTags.Productivity, BlogTags.Lifestyle, BlogTags.Career],
			date: '2024-06-15',
			link: '/blogs/believe-yourself',
		},
		{
			id: 6,
			title: 'Divide & Conquer 🪖',
			description: `
				It happens to all of us that we encounter something that seems so complex that it cannot be grasped by our brains. But often after looking at the problem for a while and breaking it up into smaller pieces it becomes manageable. In this blog post I will discuss how I use the divide and conquer principle in my coding journey.
			`,
			tags: [BlogTags.Productivity, BlogTags.Development],
			date: '2024-06-07',
			link: '/blogs/divide-conquer',
		},
		{
			id: 5,
			title: 'The right tool for the job 🔨',
			description: `
				Finding the right tool for the job can be difficult. Finding the optimal tool is even more difficult. In this blog post I go into my views on finding the right tool and what are important things to take into account.
			`,
			tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Productivity],
			date: '2024-05-24',
			link: '/blogs/finding-tools',
		},
		{
			id: 4,
			title: 'Taking notes, a real superpower 🦸',
			description: `
				Also experience forgetfulness every now and then? There is a solution! A superpower that is available to everyone, taking notes. In this blog post I will discuss how taking notes has changed my ability to remember.
			`,
			tags: [BlogTags.Productivity, BlogTags.Lifestyle],
			date: '2024-05-17',
			link: '/blogs/taking-notes',
		},
		{
			id: 3,
			title: 'Small efficiencies add up',
			description: `
				Working fast and efficient is important. Doing more in less time while impressing your colleagues is amazing. I will dive into what small and easy improvements every developer can make to work more efficiently and save time in the long run which can be spent on other things (most likely more coding!)
			`,
			tags: [BlogTags.Productivity, BlogTags.Development, BlogTags.Career],
			date: '2024-05-11',
			link: '/blogs/small-efficiencies',
		},
		{
			id: 2,
			title: 'Learning sustainably',
			description: `
				Continuous learning is very important in the world of software engineering. But a pitfall a lot of people encounter is that they cannot stick to it. In this blog post I will delve into my personal journey with learning and my findings and tips.
			`,
			tags: [BlogTags.Development, BlogTags.Lifestyle, BlogTags.Career],
			date: '2024-05-07',
			link: '/blogs/learning-sustainably',
		},
		{
			id: 1,
			title: 'How to achieve code excellence',
			description: `
				What are the key principles of code excellence? What rules to adhere to and what tools to use? This blog post will delve deep into the world of writing excellent code, click read more to find out.
			`,
			tags: [BlogTags.Development, BlogTags.Productivity, BlogTags.Career],
			date: '2024-04-24',
			link: '/blogs/code-excellence',
		},
	] as IBlog[],

	skills: [
		{
			title: 'Javascript',
			years: 9,
			level: 5,
			logo: '/assets/svg/javascript.svg',
			link: 'https://www.javascript.com/',
			featured: true,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'Python',
			years: 6,
			level: 5,
			logo: '/assets/svg/python.svg',
			link: 'https://www.python.org/',
			featured: true,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'Typescript',
			years: 5,
			level: 5,
			logo: '/assets/svg/typescript.svg',
			link: 'https://www.typescriptlang.org/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'HTML',
			years: 9,
			level: 5,
			logo: '/assets/svg/html.svg',
			link: 'https://html.spec.whatwg.org/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'CSS',
			years: 9,
			level: 5,
			logo: '/assets/svg/css.svg',
			link: 'https://www.w3.org/Style/CSS/Overview.en.html',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'php',
			years: 5,
			level: 4,
			logo: '/assets/svg/php.svg',
			link: 'https://www.php.net/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'Go',
			years: 1,
			level: 4,
			logo: '/assets/svg/go.svg',
			link: 'https://golang.org/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'C',
			years: 3,
			level: 3,
			logo: '/assets/svg/c.svg',
			link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'Matlab',
			years: 2,
			level: 3,
			logo: '/assets/svg/matlab.svg',
			link: 'https://www.mathworks.com/products/matlab.html',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'Java',
			years: 2,
			level: 2,
			logo: '/assets/svg/java.svg',
			link: 'https://www.java.com/',
			featured: false,
			type: SkillType.LANGUAGE,
		},
		{
			title: 'MongoDB',
			years: 5,
			level: 5,
			logo: '/assets/svg/mongodb.svg',
			link: 'https://www.mongodb.com/',
			featured: true,
			type: SkillType.DATABASE,
		},
		{
			title: 'MySQL',
			years: 5,
			level: 4,
			logo: '/assets/svg/mysql.svg',
			link: 'https://www.mysql.com/',
			featured: false,
			type: SkillType.DATABASE,
		},
		{
			title: 'Redis',
			years: 2,
			level: 4,
			logo: '/assets/svg/redis.svg',
			link: 'https://redis.io/',
			featured: false,
			type: SkillType.DATABASE,
		},
		{
			title: 'SQLite',
			years: 2,
			level: 4,
			logo: '/assets/svg/sqlite.svg',
			feature: false,
			type: SkillType.DATABASE,
		},
		{
			title: 'Postgres',
			years: 2,
			level: 3,
			logo: '/assets/svg/postgres.svg',
			link: 'https://www.postgresql.org/',
			featured: false,
			type: SkillType.DATABASE,
		},
		{
			title: 'Vue',
			years: 7,
			level: 5,
			logo: '/assets/svg/vue.svg',
			link: 'https://vuejs.org/',
			featured: true,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Express.js',
			years: 6,
			level: 5,
			logo: '/assets/svg/express.svg',
			link: 'https://expressjs.com/',
			featured: true,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'React',
			years: 6,
			level: 5,
			logo: '/assets/svg/react.svg',
			link: 'https://reactjs.org/',
			featured: true,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Lit',
			years: 2,
			level: 5,
			logo: '/assets/svg/lit.svg',
			link: 'https://lit.dev/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Angular',
			years: 4,
			level: 4,
			logo: '/assets/svg/angular.svg',
			link: 'https://angular.io/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Ionic',
			years: 3,
			level: 4,
			logo: '/assets/svg/ionic.svg',
			link: 'https://ionicframework.com/',
			featured: true,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'React Native',
			years: 3,
			level: 3,
			logo: '/assets/svg/react-native.svg',
			link: 'https://reactnative.dev/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Electron',
			years: 1,
			level: 3,
			logo: '/assets/svg/electron.svg',
			link: 'https://www.electronjs.org/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Astro',
			years: 2,
			level: 3,
			logo: '/assets/svg/astro.svg',
			link: 'https://astro.build/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Svelte',
			years: 2,
			level: 3,
			logo: '/assets/svg/svelte.svg',
			link: 'https://svelte.dev/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Nest.js',
			years: 1,
			level: 2,
			logo: '/assets/svg/nestjs.svg',
			link: 'https://nestjs.com/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Strapi',
			years: 1,
			level: 2,
			logo: '/assets/svg/strapi.svg',
			link: 'https://www.strapi.io/',
			featured: false,
			type: SkillType.FRAMEWORK,
		},
		{
			title: 'Git',
			years: 7,
			level: 5,
			logo: '/assets/svg/git.svg',
			link: 'https://git-scm.com/',
			featured: true,
			type: SkillType.TOOL,
		},
		{
			title: 'Sass',
			years: 2,
			level: 5,
			logo: '/assets/svg/sass.svg',
			link: 'https://sass-lang.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Jest',
			years: 4,
			level: 5,
			logo: '/assets/svg/jest.svg',
			link: 'https://jestjs.io/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'ESLint',
			years: 2,
			level: 5,
			logo: '/assets/svg/eslint.svg',
			link: 'https://eslint.org/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'npm',
			years: 5,
			level: 5,
			logo: '/assets/svg/npm.svg',
			link: 'https://www.npmjs.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Chart.js',
			years: 6,
			level: 4,
			logo: '/assets/svg/chartjs.svg',
			link: 'https://www.chartjs.org/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Cypress',
			years: 3,
			level: 4,
			logo: '/assets/svg/cypress.svg',
			link: 'https://www.cypress.io/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Pandas',
			years: 1,
			level: 4,
			logo: '/assets/svg/pandas.svg',
			link: 'https://pandas.pydata.org/',
			featured: true,
			type: SkillType.TOOL,
		},
		{
			title: 'Puppeteer',
			years: 4,
			level: 4,
			logo: '/assets/svg/puppeteer.svg',
			link: 'https://pptr.dev/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Prisma',
			years: 2,
			level: 3,
			logo: '/assets/svg/prisma.svg',
			link: 'https://www.prisma.io/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Redux',
			years: 3,
			level: 3,
			logo: '/assets/svg/redux.svg',
			link: 'https://redux.js.org/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'i18next',
			years: 2,
			level: 3,
			logo: '/assets/svg/i18next.svg',
			link: 'https://www.i18next.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Stripe',
			years: 2,
			level: 3,
			logo: '/assets/svg/stripe.svg',
			link: 'https://stripe.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Payload',
			years: 2,
			level: 3,
			logo: '/assets/svg/payload.svg',
			link: 'https://payloadcms.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Vim',
			years: 2,
			level: 3,
			logo: '/assets/svg/vim.svg',
			link: 'https://www.vim.org/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Langchain',
			years: 1,
			level: 3,
			logo: '/assets/svg/langchain.svg',
			link: 'https://langchain.com/',
			featured: false,
			type: SkillType.TOOL,
		},
		{
			title: 'Docker',
			years: 6,
			level: 5,
			logo: '/assets/svg/docker.svg',
			link: 'https://www.docker.com/',
			featured: true,
			type: SkillType.INFRASTRUCTURE,
		},

		{
			title: 'Nginx',
			years: 3,
			level: 5,
			logo: '/assets/svg/nginx.svg',
			link: 'https://www.nginx.com/',
			featured: true,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'Github',
			years: 7,
			level: 5,
			logo: '/assets/svg/github.svg',
			link: 'https://github.com/',
			featured: false,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'Github Actions',
			years: 2,
			level: 4,
			logo: '/assets/svg/github-actions.svg',
			link: 'https://github.com/features/actions',
			featured: false,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'Apache',
			years: 3,
			level: 3,
			logo: '/assets/svg/apache.svg',
			link: 'https://httpd.apache.org/',
			featured: false,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'Azure DevOps',
			years: 4,
			level: 3,
			logo: '/assets/svg/azure-devops.svg',
			link: 'https://azure.microsoft.com/en-us/services/devops/',
			featured: false,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'Jenkins',
			years: 1,
			level: 2,
			logo: '/assets/svg/jenkins.svg',
			link: 'https://www.jenkins.io/',
			featured: false,
			type: SkillType.INFRASTRUCTURE,
		},
		{
			title: 'node.js',
			years: 5,
			level: 5,
			logo: '/assets/svg/nodejs.svg',
			link: 'https://nodejs.org/',
			featured: true,
			type: SkillType.OTHER,
		},
		{
			title: 'Linux',
			years: 4,
			level: 4,
			logo: '/assets/svg/linux.svg',
			link: 'https://www.linux.org/',
			featured: false,
			type: SkillType.OTHER,
		},
		{
			title: 'Ubuntu',
			years: 4,
			level: 4,
			logo: '/assets/svg/ubuntu.svg',
			link: 'https://ubuntu.com/',
			featured: false,
			type: SkillType.OTHER,
		},
		{
			title: 'Debian',
			years: 4,
			level: 4,
			logo: '/assets/svg/debian.svg',
			link: 'https://www.debian.org/',
			featured: false,
			type: SkillType.OTHER,
		},
		{
			title: 'Windows',
			years: 12,
			level: 4,
			logo: '/assets/svg/windows.svg',
			link: 'https://www.microsoft.com/en-us/windows/',
			featured: false,
			type: SkillType.OTHER,
		},
	] as ISkill[],

	experience: [
		{
			name: 'SPAR',
			location: 'Waalwijk, Noord-Brabant, Nederland',
			startDate: 'Jun 2024',
			endDate: 'Now',
			description: [
				'At SPAR Nederland I work as a data engineer solving data related questions and problems. I am mostly using my SQL, Azure and python skills to solve complex problems related to big data. Within this role I have gotten the opportunity to try a different stack than I did in my previous roles. I hope this experience will help me broaden my skillset and become a more flexible developer.',
			],
			link: 'https://www.spar.nl/',
		},
		{
			name: 'Chary Solutions',
			location: 'Amsterdam, Noord-Holland, Nederland',
			startDate: 'Jul 2024',
			endDate: 'Now',
			description: [
				"At Chary Solutions, I served as the Senior Developer, leading the technical development for integrating marketing software, Klaviyo, with various content management systems that were not supported by default integrations. Additionally, I developed automations to enhance the company's operational efficiency.",
			],
			link: 'https://www.spar.nl/',
		},
		{
			name: 'ING',
			location: 'Amsterdam, Noord-Holland, Nederland',
			startDate: 'Apr 2022',
			endDate: 'Sep 2023',
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
			name: 'Cambridge English: C1',
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
			title: 'Encrypted message exchange service with replication',
			isFeatured: true,
			thumbnail: '/assets/images/encrypted-message-exchange.webp',
			githubUrl: 'https://github.com/thebetar/EncryptedMessageExchange',
		},
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
