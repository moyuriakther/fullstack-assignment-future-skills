import { Schema, model } from 'mongoose';
import { TCard } from './card.interface';

const CardSchema = new Schema<TCard>(
  {
    // id: { type: String, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export const CardModel = model<TCard>('Card', CardSchema);
