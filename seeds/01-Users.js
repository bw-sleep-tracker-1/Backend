exports.seed = function(knex) {
  const users = [
    {username: "cooldood", password: "password"},
    {username: "sportsfan", password: "football"}
  ];

  return knex('users').insert(users);
};