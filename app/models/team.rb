class Team < ApplicationRecord
    has_many :users

    validates :team_name, presence: true, uniqueness: true

    def members
        self.users
    end

    
end
