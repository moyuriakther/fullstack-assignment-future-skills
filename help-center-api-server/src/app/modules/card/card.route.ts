import express from 'express';
import { CardControllers } from './card.controller';
import validateRequest from '../../middleware/validateRequest';
import { createCardValidationSchema } from './card.validation';

const router = express.Router();

router.get('/', CardControllers.getAllCards);
router.get('/:title', CardControllers.getSingleCard);
router.post(
  '/',
  validateRequest(createCardValidationSchema),
  CardControllers.addNewCard,
);


export const CardRoutes = router;
