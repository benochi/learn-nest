import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

//export UserDocument - union of user class & Document from mongoose. 
export type UserDocument = User & Document;

@Schema()
export class User{
  @Prop()
  userId: string;

  @Prop()
  email: string;

  @Prop()
  age: number;
  //decorator tells mongoose that it is an array of strings
  @Prop([String])
  favoriteFoods: string[];
}

//import schemafactory and pass in the User class. 
export const UserSchema = SchemaFactory.createForClass(User);