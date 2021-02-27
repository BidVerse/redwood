import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany({
    select: {
      name: true,
      profileImgUrl: true,
      id: true,
      email: true,
      bio: true,
      role: true,
      Offer: true,
      Job: true,
    },
  })
}

export const User = {
  Offer: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).Offer(),
  Job: (_obj, { root }) => db.user.findUnique({ where: { id: root.id } }).Job(),
}
