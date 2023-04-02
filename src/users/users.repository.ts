import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { User, UserDocument } from "./schemas/user.schema";
import { Model, FilterQuery } from "mongoose"

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  //can add additional arguments if needed. interface for Users only and allows returning data.
  async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(userFilterQuery)
  }
  //this will return an array of users
  async find(usersFilterQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(usersFilterQuery)
  }

}