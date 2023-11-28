puts "🌱 Seeding data..."

User.destroy_all
Team.destroy_all
ClimbingSet.destroy_all
Climb.destroy_all

5.times do 
    Team.create(
        {
            team_name: Faker::Team.unique.name
        }
    )
end

User.create(
    {
        first_name: "Admin",
        last_name: "Account",
        username: "admin",
        password_digest: BCrypt::Password.create("password"),
        email: 'admin@lbr.com',
        handicap: 0,
        points: 0,
        admin: true
    }
)

4.times do
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        username: Faker::Internet.username,
        password_digest: BCrypt::Password.create("password"),
        email: Faker::Internet.email,
        handicap: rand(10),
        team_id: 1,
        admin: false
    )
end

3.times do
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        username: Faker::Internet.username,
        password_digest: BCrypt::Password.create("password"),
        email: Faker::Internet.email,
        handicap: rand(10),
        team_id: 2,
        admin: false
    )
end

2.times do
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        username: Faker::Internet.username,
        password_digest: BCrypt::Password.create("password"),
        email: Faker::Internet.email,
        handicap: rand(10),
        team_id: 3,
        admin: false
    )
end

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

(1..9).each do |grade|
    Climb.create(
      grade: grade,
      color: Faker::Color.color_name,
      climbing_set_id: 1
    )
end

(1..9).each do |grade|
    Climb.create(
      grade: grade,
      color: Faker::Color.color_name,
      climbing_set_id: 2
    )
end

puts "✅ Done seeding!"