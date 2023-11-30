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

admin = User.create(
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

admin.image.attach(
    io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
    filename: 'default_profile_pic.png'
)




user1 = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    username: Faker::Internet.username,
    password_digest: BCrypt::Password.create("password"),
    email: Faker::Internet.email,
    handicap: rand(10),
    team_id: 1,
    admin: false
)
user1.image.attach(
    io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
    filename: 'default_profile_pic.png'
)



user2 = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    username: Faker::Internet.username,
    password_digest: BCrypt::Password.create("password"),
    email: Faker::Internet.email,
    handicap: rand(10),
    team_id: 1,
    admin: false
)
user2.image.attach(
    io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
    filename: 'default_profile_pic.png'
)



user3 = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    username: Faker::Internet.username,
    password_digest: BCrypt::Password.create("password"),
    email: Faker::Internet.email,
    handicap: rand(10),
    team_id: 1,
    admin: false
)
user3.image.attach(
    io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
    filename: 'default_profile_pic.png'
)



user4 = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    username: Faker::Internet.username,
    password_digest: BCrypt::Password.create("password"),
    email: Faker::Internet.email,
    handicap: rand(10),
    team_id: 1,
    admin: false
)
user4.image.attach(
    io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
    filename: 'default_profile_pic.png'
)


    
week1 = ClimbingSet.create(
    {
        set_name: "Cave",
        week: 1,
        date_start: "2023-10-31",
        date_end: "2023-11-07",
        notes: "First week! Start off strong!"
    }
)
week1.image.attach(
    io: File.open(Rails.root.join('app/assets/images/lbr-cave.jpeg')), 
    filename: 'lbr-cave.jpeg'
)



 week2 = ClimbingSet.create(
    {
        set_name: "Back Island",
        week: 2,
        date_start: "2023-11-07",
        date_end: "2023-11-14",
        notes: "Good luck!"
    }
 )
 week2.image.attach(
    io: File.open(Rails.root.join('app/assets/images/lbr-back-island.jpeg')), 
    filename: 'lbr-back-island.jpeg'
)


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