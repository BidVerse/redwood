export const standard = defineScenario({
  offer: {
    one: {
      '[object Object]': 'String',
      from: { create: { email: 'String3003155', password: 'String' } },
      onJob: {
        create: {
          name: 'String',
          description: 'String',
          photoUrl: 'String',
          from: { create: { email: 'String286408', password: 'String' } },
        },
      },
    },

    two: {
      '[object Object]': 'String',
      from: { create: { email: 'String1564583', password: 'String' } },
      onJob: {
        create: {
          name: 'String',
          description: 'String',
          photoUrl: 'String',
          from: { create: { email: 'String6491574', password: 'String' } },
        },
      },
    },
  },
})
