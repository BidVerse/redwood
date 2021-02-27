import { db } from 'src/lib/db'

export const users = ({ id, name }) => {
  return db.user.findMany({
    where: {
      id,
      name,
    },
  })
}

export const User = {
  offers: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).offers(),
  jobs: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).jobs(),
}
