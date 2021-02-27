import { db } from 'src/lib/db'

export const offers = () => {
  return db.offer.findMany()
}

export const Offer = {
  from: (_obj, { root }) =>
    db.offer.findUnique({ where: { id: root.id } }).from(),
  onJob: (_obj, { root }) =>
    db.offer.findUnique({ where: { id: root.id } }).onJob(),
}
