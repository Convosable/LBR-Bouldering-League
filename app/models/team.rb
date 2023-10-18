class Team < ApplicationRecord
    has_many :users

    validates :team_name, presence: true, uniqueness: true

    def members
        users.where(team_id: self.id)
    end
    
end
