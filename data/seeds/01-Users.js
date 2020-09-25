exports.seed = function(knex) {
  const users = [
    {
      username: "cooldood",
      password: "$2a$04$lNyoUq3/7/qignybJYDWneGAF.BDOYx1SrjValHNR9eOvnZbPdP5u"
    },
    {
      username: "hockeyfan",
      password: "$2a$04$lNyoUq3/7/qignybJYDWneGAF.BDOYx1SrjValHNR9eOvnZbPdP5u"
    }
  ];

  return knex('users').insert(users);
};