import { db } from 'src/lib/db'

export const jobs = () => {
  return db.job.findMany()
}

export const Job = {
  from: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).from(),
  Offer: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).Offer(),
}
