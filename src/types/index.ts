export interface IMetaHead {
	title: string;
	description: string;
	keywords: string;
	author: string;
	ogImageUrl: string;
}

export interface IHeroProps {
	name: string;
	jobDescription1: string;
	jobDescription2: string;
	about: string;
}

export interface IBlog {
	title: string;
	description: string;
	date: string;
	link: string;
}

export interface IBlogs {
	title: string;
	blogs: IBlog[];
}

export interface ISkill {
	title: string;
	years: number;
	logo: string;
	link: string;
	featured: boolean;
}

export interface ISkills {
	title: string;
	skills: ISkill[];
}

export interface IExperience {
	name: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	link: string;
}
export interface IExperiences {
	title: string;
	details: IExperience[];
}

export interface IProject {
	title: string;
	isFeatured: boolean;
	thumbnail: string;
	githubUrl: string;
	liveUrl: string;
}

export interface IProjects {
	title?: string;
	projects: IProject[];
}

export interface IProjectDetails {
	projectDetail: IProject;
}
