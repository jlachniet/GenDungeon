import { getRandElement } from '../Utils';
import Thing from './Thing';

interface FoodProperties {
	name: string;
	description: string;
	foodPoints: number;
}

const foods: FoodProperties[] = [
	{
		name: 'Apple',
		description: 'A red apple.',
		foodPoints: 1,
	},
	{
		name: 'Banana',
		description: 'A yellow banana.',
		foodPoints: 2,
	},
];

/**
 * A piece of food.
 */
class Food extends Thing {
	private foodPoints: number;

	/**
	 * Constructs a new piece of food.
	 */
	constructor() {
		let props = getRandElement(foods);
		super(props.name, props.description);

		this.foodPoints = props.foodPoints;
	}
}
