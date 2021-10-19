import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({ tableName: 'Users' })
export class User extends Model {
	@PrimaryKey
	@Column({
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	})
	public userId!: number;

	@Column
	username: string;
}
