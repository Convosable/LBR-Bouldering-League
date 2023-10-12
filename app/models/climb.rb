class Climb < ApplicationRecord
    has_many :user_climbs
    has_many :users, through: :user_climbs
    belongs_to :climbing_set

    validates :grade, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }
    validates :color, presence: true
end
