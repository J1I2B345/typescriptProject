import {
	Model,
	Column,
	Table,
	CreatedAt,
	UpdatedAt,
} from "sequelize-typescript";
import { Col } from "sequelize/types/utils";

//decorador
@Table
export class User extends Model<User> {
	@Column({
		allowNull: false,
		unique: "compositeIndex",
	})
	name!: string;
	@Column({
		allowNull: false,
		unique: "compositeIndex",
	})
	lastName!: string;
	@CreatedAt
	@Column
	createdAt!: Date;
	@UpdatedAt
	@Column
	updatedAt!: Date;
}
