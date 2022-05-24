import {formatDate} from "../utils/formatDate";

export default class Operation {
  static getAdoptedItem(raw) {
    return {
      _id: raw["_id"],
      date: formatDate(raw["date"]),
      value: raw["value"],
    }
  }

  static getRawItem(data) {
    return {
      _id: data._id,
      date: formatDate(data.date),
      value: data.value,
    }
  }

  static getAdoptedList(rawList) {
    return rawList.map(raw => Operation.getAdoptedItem(raw))
  }
}
