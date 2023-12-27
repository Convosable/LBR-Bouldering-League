puts "🌱 Seeding data..."

# User.destroy_all
# Team.destroy_all
# ClimbingSet.destroy_all
# Climb.destroy_all

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

puts "✅ Done seeding!"