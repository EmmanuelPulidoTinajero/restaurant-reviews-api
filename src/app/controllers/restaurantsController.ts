import { Request, Response } from "express";
import Restaurant from "../models/restaurant";
import restaurant from "../models/restaurant";

export const createRestaurant = async (req: Request, res: Response) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).send(restaurant);
    } catch (error) {
        res.status(400).send({message: error})
    }
}

export const getAllRestaurants = async (req: Request, res: Response) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).send(restaurants);
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getRestaurantById = async (req: Request, res: Response) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            res.status(404).send({ message: "Not found" });
        }
        res.send(restaurant);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateRestaurantById = async (req: Request, res: Response) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );

        if (!updatedRestaurant) {
            return res.status(404).send({ message: "Not Found"});
        }

        res.status(200).send(updatedRestaurant);
    } catch (error) {
        res.status(500).send(error);
    }
}