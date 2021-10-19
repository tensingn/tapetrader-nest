import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Col } from 'sequelize/types/lib/utils';

@Table({ tableName: 'Merch' })
export class Merch extends Model {
	@PrimaryKey
	@Column({
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	})
	public merchId!: number;

	@Column
	description: string;

	@Column
	merchType: string;

	@Column
	bandId: number;

	@Column
	userId: number;
}
