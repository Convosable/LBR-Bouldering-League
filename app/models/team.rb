class Team < ApplicationRecord
    has_many :users

    attribute :team_points, :integer

    validates :team_name, presence: true, uniqueness: true

    def calculate_team_points
        self.team_points = users.sum(:points)
        save
    end

    def slugify
        self.team_name.parameterize
    end

    
end
