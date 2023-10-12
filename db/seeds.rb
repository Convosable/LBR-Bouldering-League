puts "🌱 Seeding data..."

User.create([
  {
    first_name: "Connor",
    last_name: "Vosberg",
    username: "convosable",
    password_digest: "password",
    email: "connor@lbr.com",
    handicap: 7,
    team_id: 1
  },
  {
    first_name: "Ziv",
    last_name: "Elgar",
    username: "zeev",
    password_digest: "password",
    email: "ziv@lbr.com",
    handicap: 1,
    team_id: 2
  }
])

Team.create([
    {
        team_name: "The Slabberz"
    },
    {
        team_name: "The Ascenders"
    }
])

ClimbingSet.create([
    {
        set_name: "Beer Wall",
        week: 1,
        date_start: "2023-10-09",
        date_end: "2023-10-16"
    }
])

Climb.create([
    {
        grade: 1,
        color: "red",
        climbing_set_id: 1
    },
    {
        grade: 1,
        color: "yellow",
        climbing_set_id: 1
    },
    {
        grade: 3,
        color: "green",
        climbing_set_id: 1
    },
    {
        grade: 7,
        color: "red",
        climbing_set_id: 1
    },
    {
        grade: 8,
        color: "pink",
        climbing_set_id: 1
    },
    {
        grade: 6,
        color: "white",
        climbing_set_id: 1
    }
])

puts "✅ Done seeding!"