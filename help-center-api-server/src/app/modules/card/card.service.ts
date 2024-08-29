import SearchOnQuery from "../../builder/SearchOnQuery";
import { cardSearchableFields } from "./card.constant";
import { TCard } from "./card.interface";
import { CardModel } from "./card.model";

const addNewCardIntoDB = async (payload: TCard) => {
    const result = await CardModel.create(payload);
    return result;
  };
  const getAllCardsFromDB = async (query: Record<string, unknown>) => {
    const cardQuery = new SearchOnQuery(CardModel.find(), query)
      .search(cardSearchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();
    const result = await cardQuery.modelQuery;
    const meta = await cardQuery.countTotal();
    return { result, meta };
  };

  const getSingleCardFromDB = async (title: string) => {
    const result = await CardModel.findOne({title: title});
    if (!result) {
      return ({ message: 'Card not found' });
    }
    return result;
  };

export const CardServices = {
    addNewCardIntoDB,
    getAllCardsFromDB,
    getSingleCardFromDB
};
