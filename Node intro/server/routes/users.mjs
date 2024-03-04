import express from "express";
import userController from "../controller/userController.mjs";

const router = express.Router();

router.get("/", userController.getUsers);

router.post("/register", userController.createUser);

router.get("/:id", userController.getUsetById);

router.put("/:id", userController.updateUser);

router.patch("/:id", userController.updateUserFields);

router.delete("/:id", userController.deleteUser);

router.get("/:id/reservations", userController.getUserReservations);

router.post("/:userId/reservations/:bookId", userController.createReservation);

router.delete("/:userId/reservations/:bookId", userController.deleteReservation)

export default router;
