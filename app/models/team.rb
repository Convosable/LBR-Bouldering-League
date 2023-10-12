class Team < ApplicationRecord
    has_many :users

    validates :team_name, presence: true, uniqueness: true
end
