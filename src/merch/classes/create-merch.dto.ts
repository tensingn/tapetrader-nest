import { IsNotEmpty } from 'class-validator';

export class CreateMerchDto {
	@IsNotEmpty()
	readonly description: string;

	@IsNotEmpty()
	readonly merchType: string;

	@IsNotEmpty()
	readonly userId: number;

	readonly band: number;
}
