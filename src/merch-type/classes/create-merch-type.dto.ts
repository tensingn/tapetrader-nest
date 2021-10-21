import { IsNotEmpty } from 'class-validator';

export class CreateMerchTypeDto {
	@IsNotEmpty()
	readonly name: string;
}
