import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';
import {prop} from '@typegoose/typegoose';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export class Hhdata {
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
}

export class TopPageAdvantage {
	title: string;
	description: string;
}

export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps{
	@prop({enum: TopLevelCategory})
	firstCategory: TopLevelCategory;

	@prop()
	secondCategory: string;

	@prop()
	title: string;

	@prop({unique: true})
	alias: string;

	@prop()
	category: string;

	@prop({type: () => Hhdata})
	hh?: Hhdata;

	@prop({type: () => [TopPageAdvantage]})
	advantages: TopPageAdvantage[];

	@prop()
	seoText: string;

	@prop()
	tagsTitle: string;

	@prop({type: () => [String]})
	tags: string[];
}
