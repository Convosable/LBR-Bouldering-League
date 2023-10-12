class Climb < ApplicationRecord
    has_many :user_climbs
    has_many :users, through: :user_climbs
    belongs_to :climbing_set    
end
