puts "🌱 Seeding data..."

# User.destroy_all
Team.destroy_all
ClimbingSet.destroy_all
Climb.destroy_all

5.times do
    Team.create({
        team_name: Faker::Team.unique.name,
        team_points: Faker::Number.within(range: 100..1000)
    })
  end

ClimbingSet.create([
    {
        set_name: "Beer-Wall",
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