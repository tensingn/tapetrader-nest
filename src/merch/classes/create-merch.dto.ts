import { IsNotEmpty } from 'class-validator';

export class CreateMerchDto {
	@IsNotEmpty()
	readonly description: string;

	@IsNotEmpty()
	readonly typeId: number;

	@IsNotEmpty()
	readonly userId: number;

	readonly forSaleOrTrade: boolean;

	readonly artistId: number;
}
