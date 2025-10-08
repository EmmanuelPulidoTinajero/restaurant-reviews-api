
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user';

export interface IReview extends Document {
  rating: number;
  comment: string;
  user: IUser['_id'];
}

const reviewSchema: Schema = new Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<IReview>('Review', reviewSchema);
export { reviewSchema };
