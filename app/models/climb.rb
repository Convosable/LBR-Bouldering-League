class Climb < ApplicationRecord
    has_many :user_climbs
    has_many :users, through: :user_climbs
    belongs_to :climbing_set

    validates :grade, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }
    validates :color, presence: true

    def calculate_points(user)
        if user.handicap >= self.grade
            self.points = 100
        elsif user.handicap == self.grade - 1
            self.points = 150
        elsif user.handicap == self.grade - 2
            self.points = 200
        elsif user.handicap == self.grade - 3
            self.points = 250
        else
            self.points = 0
        end
        save
    end
end

# maybe add a message attribute column for Climb, where it sends a message back to the user if they complete aq climb thats 4 grades above their handicap w/ Maybe you need to bump up your handicap...