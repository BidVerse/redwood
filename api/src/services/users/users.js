import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const User = {
  Offer: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).Offer(),
  Job: (_obj, { root }) => db.user.findUnique({ where: { id: root.id } }).Job(),
}
