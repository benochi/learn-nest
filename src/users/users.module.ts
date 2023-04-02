//tells nest about the users schema.
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])]
})

export class UsersModule {}