import { Request, Response } from 'express';
import Review from '../models/review';

export const getReviewController = async (req: Request, res: Response) => {
    try {
        const review = await Review.findById(req.params.id).populate('user', 'name email');
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching review', error });
    }
};

export const postReviewController = async (req: Request, res: Response) => {
    try {
        const { rating, comment } = req.body;
        const review = new Review({
            rating,
            comment,
            user: (req as any).user._id
        });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error creating review', error });
    }
};

export const updateReviewController = async (req: Request, res: Response) => {
    try {
        const { rating, comment } = req.body;
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        if (review.user.toString() !== (req as any).user._id.toString()) {
            return res.status(403).json({ message: 'User not authorized to update this review' });
        }

        review.rating = rating ?? review.rating;
        review.comment = comment ?? review.comment;

        await review.save();
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error updating review', error });
    }
};
