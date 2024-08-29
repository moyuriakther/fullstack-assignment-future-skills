import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CardServices } from "./card.service";

const addNewCard = catchAsync(async (req, res) => {
  console.log(req.body)
    const result = await CardServices.addNewCardIntoDB(req.body);
    sendResponse(res, {
      success: true,
      message: 'Card is Created Successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
const getAllCards = catchAsync(async (req, res) => {
    const result = await CardServices.getAllCardsFromDB(req.query);
    sendResponse(res, {
      success: true,
      message: 'Cards data Retrirved Successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
const getSingleCard = catchAsync(async (req, res) => {
  console.log(req.params.cardId)
    const result = await CardServices.getSingleCardFromDB(req.params.title);
    sendResponse(res, {
      success: true,
      message: 'Card Retrieved Successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });

  export const CardControllers = {
    addNewCard,
    getAllCards,
    getSingleCard
  };
  