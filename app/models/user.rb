class User < ApplicationRecord
    belongs_to :team
    has_many :user_climbs
    has_many :climbs, through: :user_climbs
end
