import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const User = {
  offers: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).Offers(),
  jobs: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).Jobs(),
}
