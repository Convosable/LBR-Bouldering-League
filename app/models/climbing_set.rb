class ClimbingSet < ApplicationRecord
    has_many :climbs

    validates :set_name, presence: true
    validates :week, presence: true
    validates :date_start, presence: true
    validates :date_end, presence: true
end
