exports.seed = function(knex) {
  const entries = [
    {
      user_id: 1,
      bedtime: "2020-09-01T22:00:00.000Z",
      waketime: "2020-09-02T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 1,
      bedtime: "2020-09-02T22:00:00.000Z",
      waketime: "2020-09-03T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 1,
      bedtime: "2020-09-03T22:00:00.000Z",
      waketime: "2020-09-04T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 1,
      bedtime: "2020-09-04T22:00:00.000Z",
      waketime: "2020-09-05T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 1,
      bedtime: "2020-09-05T22:00:00.000Z",
      waketime: "2020-09-06T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 1,
      bedtime: "2020-09-06T22:00:00.000Z",
      waketime: "2020-09-07T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 1,
      bedtime: "2020-09-07T22:00:00.000Z",
      waketime: "2020-09-08T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 2,
      bedtime: "2020-09-01T22:00:00.000Z",
      waketime: "2020-09-02T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 2,
      bedtime: "2020-09-02T22:00:00.000Z",
      waketime: "2020-09-03T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 2,
      bedtime: "2020-09-03T22:00:00.000Z",
      waketime: "2020-09-04T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 2,
      bedtime: "2020-09-04T22:00:00.000Z",
      waketime: "2020-09-05T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 2,
      bedtime: "2020-09-05T22:00:00.000Z",
      waketime: "2020-09-06T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 2,
      bedtime: "2020-09-06T22:00:00.000Z",
      waketime: "2020-09-07T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    },
    {
      user_id: 2,
      bedtime: "2020-09-07T22:00:00.000Z",
      waketime: "2020-09-08T06:00:00.000Z",
      hours: 8.0,
      wake_rating: 4,
      day_rating: 4,
      bed_rating: 4
    }
  ];

  return knex('entries').insert(entries);
};