puts "🌱 Seeding data..."

User.destroy_all
Team.destroy_all
ClimbingSet.destroy_all
Climb.destroy_all

User.create([
    {
        first_name: "Admin",
        last_name: "Account",
        username: "admin",
        password_digest: BCrypt::Password.create("password"),
        email: 'admin@lbr.com',
        handicap: 0,
        points: 0,
        admin: true
    },
    {
        first_name: "Ben",
        last_name: "Feldman",
        username: "bfeld",
        password_digest: BCrypt::Password.create("password"),
        email: 'bfeld@lbr.com',
        handicap: 6,
        team_id: 2,
        admin: false
    },
    {
        first_name: "Marc",
        last_name: "Weiner",
        username: "marc",
        password_digest: BCrypt::Password.create("password"),
        email: 'marc@lbr.com',
        handicap: 6,
        team_id: 2,
        admin: false
    },
    {
        first_name: "Connor",
        last_name: "Vosberg",
        username: "convosable",
        password_digest: BCrypt::Password.create("password"),
        email: 'convosable@lbr.com',
        handicap: 7,
        team_id: 1,
        admin: false
    },
    {
        first_name: "Ziv",
        last_name: "Elgar",
        username: "zeev",
        password_digest: BCrypt::Password.create("password"),
        email: 'zeev@lbr.com',
        handicap: 1,
        team_id: 1,
        admin: false
    },
    {
        first_name: "Alex",
        last_name: "Escobar",
        username: "alex",
        password_digest: BCrypt::Password.create("password"),
        email: 'alex@lbr.com',
        handicap: 2,
        team_id: 2,
        admin: false
    }
])

Team.create([
    {
        team_name: "The Rockers",
    },
    {
        team_name: "The Rollers",
    }
])

## Have to comment out impage presence validation in ClimbingSetModel for seed data generation...

ClimbingSet.create([
    {
        set_name: "Beer Wall",
        week: 1,
        date_start: "2023-10-31",
        date_end: "2023-11-07"
    },
    {
        set_name: "Slab",
        week: 2,
        date_start: "2023-11-07",
        date_end: "2023-11-14"
    }
])

Climb.create([
    {
        grade: 1,
        color: "Red",
        climbing_set_id: 1
    },
    {
        grade: 2,
        color: "Yellow",
        climbing_set_id: 1
    },
    {
        grade: 3,
        color: "Green",
        climbing_set_id: 1
    },
    {
        grade: 4,
        color: "Red",
        climbing_set_id: 1
    },
    {
        grade: 5,
        color: "Pink",
        climbing_set_id: 1
    },
    {
        grade: 6,
        color: "White",
        climbing_set_id: 1
    },
    {
        grade: 7,
        color: "Red",
        climbing_set_id: 1
    },
    {
        grade: 8,
        color: "Pink",
        climbing_set_id: 1
    },
    {
        grade: 9,
        color: "White",
        climbing_set_id: 1
    },
    {
        grade: 1,
        color: "Pink",
        climbing_set_id: 2
    },
    {
        grade: 2,
        color: "Yellow",
        climbing_set_id: 2
    },
    {
        grade: 3,
        color: "Blue",
        climbing_set_id: 2
    },
    {
        grade: 4,
        color: "Orange",
        climbing_set_id: 2
    },
    {
        grade: 5,
        color: "Yellow",
        climbing_set_id: 2
    },
    {
        grade: 6,
        color: "White",
        climbing_set_id: 2
    },
    {
        grade: 7,
        color: "White",
        climbing_set_id: 2
    },
    {
        grade: 8,
        color: "Green",
        climbing_set_id: 2
    },
    {
        grade: 9,
        color: "Red",
        climbing_set_id: 2
    }
])

puts "✅ Done seeding!"