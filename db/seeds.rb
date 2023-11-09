puts "🌱 Seeding data..."

User.destroy_all
Team.destroy_all
ClimbingSet.destroy_all
Climb.destroy_all

User.create(
    {
        first_name: "Admin",
        last_name: "Account",
        username: "admin",
        password_digest: BCrypt::Password.create("password"),
        email: 'admin@lbr.com',
        handicap: 0,
        admin: true
    }
)

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