puts "🌱 Seeding data..."

User.destroy_all
Team.destroy_all
ClimbingSet.destroy_all
Climb.destroy_all


# Team.create([
#     {
#         team_name: "Team A"
#     },
#     {
#         team_name: "Team B"
#     },
#     {
#         team_name: "Team C"
#     },
#     {
#         team_name: "Team D"
#     },
#     {
#         team_name: "Team E"
#     }
# ])


# admin = User.create(
#     {
#         first_name: "Admin",
#         last_name: "Account",
#         username: "admin",
#         password_digest: BCrypt::Password.create("password"),
#         email: 'admin@lbr.com',
#         handicap: 0,
#         admin: true
#     }
# )

# admin.image.attach(
#     io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
#     filename: 'default_profile_pic.png'
# )




# user1 = User.create(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     username: Faker::Internet.username,
#     password_digest: BCrypt::Password.create("password"),
#     email: Faker::Internet.email,
#     handicap: rand(10),
#     team_id: 1,
#     admin: false
# )
# user1.image.attach(
#     io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
#     filename: 'default_profile_pic.png'
# )



# user2 = User.create(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     username: Faker::Internet.username,
#     password_digest: BCrypt::Password.create("password"),
#     email: Faker::Internet.email,
#     handicap: rand(10),
#     team_id: 1,
#     admin: false
# )
# user2.image.attach(
#     io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
#     filename: 'default_profile_pic.png'
# )



# user3 = User.create(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     username: Faker::Internet.username,
#     password_digest: BCrypt::Password.create("password"),
#     email: Faker::Internet.email,
#     handicap: rand(10),
#     team_id: 1,
#     admin: false
# )
# user3.image.attach(
#     io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
#     filename: 'default_profile_pic.png'
# )



# user4 = User.create(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     username: Faker::Internet.username,
#     password_digest: BCrypt::Password.create("password"),
#     email: Faker::Internet.email,
#     handicap: rand(10),
#     team_id: 1,
#     admin: false
# )
# user4.image.attach(
#     io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
#     filename: 'default_profile_pic.png'
# )



# user5 = User.create(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     username: Faker::Internet.username,
#     password_digest: BCrypt::Password.create("password"),
#     email: Faker::Internet.email,
#     handicap: rand(10),
#     team_id: 2,
#     admin: false
# )
# user5.image.attach(
#     io: File.open(Rails.root.join('app/assets/images/default_profile_pic.png')), 
#     filename: 'default_profile_pic.png'
# )


    
# week1 = ClimbingSet.create(
#     {
#         set_name: "Cave",
#         week: 1,
#         date_start: "2023-10-31",
#         date_end: "2023-11-07",
#         notes: "First week! Start off strong!"
#     }
# )
# week1.image.attach(
#     io: File.open(Rails.root.join('app/assets/images/lbr-cave.jpeg')), 
#     filename: 'lbr-cave.jpeg'
# )



#  week2 = ClimbingSet.create(
#     {
#         set_name: "Back Island",
#         week: 2,
#         date_start: "2023-11-07",
#         date_end: "2023-11-14",
#         notes: "Good luck!"
#     }
#  )
#  week2.image.attach(
#     io: File.open(Rails.root.join('app/assets/images/lbr-back-island.jpeg')), 
#     filename: 'lbr-back-island.jpeg'
# )



# (1..9).each do |grade|
#     Climb.create(
#         grade: grade,
#         color: Faker::Color.color_name,
#         climbing_set_id: 1
#     )
# end

# (1..9).each do |grade|
#     Climb.create(
#         grade: grade,
#         color: Faker::Color.color_name,
#         climbing_set_id: 2
#     )
# end



# UserClimb.create(
#     [
#         {
#             climb_id: 1,
#             user_id: user1.id
#         },
#         {
#             climb_id: 3,
#             user_id: user1.id
#         },
#         {
#             climb_id: 5,
#             user_id: user1.id
#         },
#         {
#             climb_id: 7,
#             user_id: user1.id
#         },
#         {
#             climb_id: 2,
#             user_id: user2.id
#         },
#         {
#             climb_id: 8,
#             user_id: user2.id
#         },
#         {
#             climb_id: 12,
#             user_id: user2.id
#         },
#         {
#             climb_id: 13,
#             user_id: user2.id
#         },{
#             climb_id: 6,
#             user_id: user5.id
#         },
#         {
#             climb_id: 9,
#             user_id: user5.id
#         },
#         {
#             climb_id: 15,
#             user_id: user5.id
#         },
#         {
#             climb_id: 16,
#             user_id: user5.id
#         }
#     ]
# )


# user1.update_points
# user1.team.calculate_team_points if user1.team.present?

# user2.update_points
# user2.team.calculate_team_points if user2.team.present?

# user5.update_points
# user5.team.calculate_team_points if user5.team.present?



puts "✅ Done seeding!"