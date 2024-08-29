import express from 'express';
import { CardControllers } from './card.controller';

const router = express.Router();

router.get('/', CardControllers.getAllCards);
router.get('/:title', CardControllers.getSingleCard);
router.post(
  '/',
//   validateRequest(bikeValidations.addBikeValidationSchema),
  CardControllers.addNewCard,
);


export const CardRoutes = router;
