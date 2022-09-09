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
	//dentro del parentesis van las propiedades como las de sequelize
	@Column({
		allowNull: false,
		unique: "compositeIndex",
	})
	//fuera va el nombre y el tipo de dato
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
