/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('scenario')
  .del()
  .then(() => {
    // Inserts seed entries
    return knex('scenario').insert([
      {
        id: 1,
        url: 'https://i.giphy.com/media/3rbURdpeByOsM/giphy.webp',
        description: 'You have got your hands on some kind of time travel device, what do you do?'
      },
      {
        id: 2,
        url: 'https://i.giphy.com/media/nrQnXb3W6iFDq/giphy.webp',
        description: 'World Domination',
      },
      {
        id: 3,
        url: 'https://i.giphy.com/media/SxMMNyNTMGw2uwqSNl/giphy.webp',
        description: 'The 90s',
      },
      {
        id: 4,
        url: 'https://i.giphy.com/media/26h0pHNtHKjmDo4WQ/giphy.webp',
        description: 'Before Covid?',
      },
    ])
  })
};
