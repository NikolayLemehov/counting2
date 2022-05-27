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
    const items = rawList.map(raw => Operation.getAdoptedItem(raw))

    return items.reduce((acc, it, i) => {
      const prevTotal = i === 0 ? 0 : items[i - 1].total

      items[i].total = prevTotal + it.value

      acc.push(items[i])
      return acc
    }, [])
  }
}
