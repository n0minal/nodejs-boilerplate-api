import { Table, Model, Column, DataType, Length, AllowNull, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import * as bcrypt from "bcryptjs";

export interface UserInterface {
  id?: number,
  name: string,
  username: string,
  password: string,
  email: string,
  createdAt?: Date,
  updatedAt?: Date,
  deletedAt?: Date
}

@Table({ tableName: 'users', timestamps: true, paranoid: true, createdAt: 'created_at', updatedAt: 'updated_at', deletedAt: 'deleted_at' })
export default class User extends Model<User> {

  @AllowNull(false)
  @Length({ min: 4, max: 24 })
  @Column
  name!: string;

  @AllowNull(false)
  @Length({ min: 4, max: 24 })
  @Column
  username!: string;

  @Column(DataType.STRING)
  set password(value: string) {
    this.setDataValue('password', bcrypt.hashSync(value, 10));
  }

  @Length({ min: 4, max: 128 })
  @Column
  email!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
