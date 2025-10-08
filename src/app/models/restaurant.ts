
import mongoose, { Schema, Document } from 'mongoose';
import { IReview, reviewSchema } from './review';

export interface IRestaurant extends Document {
  name: string;
  address: string;
  cuisine: string;
  reviews: IReview[];
}

const restaurantSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  cuisine: { type: String, required: true },
  reviews: [reviewSchema],
});

export default mongoose.model<IRestaurant>('Restaurant', restaurantSchema);
