import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PageDocument = Page & Document;

@Schema()
export class Page {
  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  thumbnail: string;

  @Prop()
  pageData: object;

  @Prop({ default: 0 })
  count: number;

  @Prop()
  cleanUrl: string;

  @Prop()
  comments: string[];
}

export const PageSchema = SchemaFactory.createForClass(Page);
