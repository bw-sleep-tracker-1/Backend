
exports.up = function(knex) {
    return knex.schema
        .createTable("users", tbl => {
            tbl.increments("user_id");
            tbl.text("username", 32)
                .notNullable();
            tbl.text("password")
                .notNullable();
            tbl.text("first_name");
            tbl.text("last_name");
            tbl.text("email");
        })
        
        .createTable("entries", tbl => {
            tbl.increments("entry_id");
            tbl.integer("user_id")
                .unsigned()
                .notNullable()
                .references("user_id")
                .inTable("users")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.text("bedtime")
                .notNullable();
            tbl.text("waketime")
                .notNullable();
            tbl.real("hours");
            tbl.integer("wake_rating")
                .notNullable();
            tbl.integer("day_rating");
            tbl.integer("bed_rating");
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("entries")
        .dropTableIfExists("users");
};