/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  // https://www.prisma.io/docs/guides/prisma-guides/seed-database
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  const user1 = await db.user.create({
    data: {
      email: 'swerdlowbenjamin@gmail.com',
      password: 'swerdtheword',
      name: 'ben',
      bio: 'the creator',
      role: 'Bidder',
    },
  })

  const user2 = await db.user.create({
    data: {
      email: 'jacobzwang@gmail.com',
      password: 'zwanggang',
      name: 'Jacob Zwang',
      bio: 'the designer genius super designer developer',
      role: 'Contractor',
    },
  })

  const job1 = await db.job.create({
    data: {
      fromId: user1.id,
      name: 'Sexy AF Logo',
      description: 'I can make you a super sexy af logo',
      photoUrl:
        'https://hasura.io/blog/content/images/2020/11/redwoodjs_hasura.png',
      minimumBid: 100,
    },
  })

  const job2 = await db.job.create({
    data: {
      fromId: user1.id,
      name: 'Sorta Sexy Website',
      description: 'I can make you a sorta sexy website',
      photoUrl:
        'https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2020/07/getting-started-with-redwoodjs.png?w=730&ssl=1',
      minimumBid: 200,
    },
  })

  await db.offer.create({
    data: {
      fromId: user2.id,
      name: 'Burger boys',
      description: "My company need's a sexy af logo, we make burgers",
      amount: 4000,
      jobId: job1.id,
      public: true,
    },
  })

  await db.offer.create({
    data: {
      fromId: user2.id,
      name: "Don't ask",
      description: "My company need's a website, we make websites",
      amount: 5000,
      jobId: job2.id,
      public: true,
    },
  })

  console.info('No data to seed. See api/db/seed.js for info.')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
