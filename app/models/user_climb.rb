class UserClimb < ApplicationRecord
    belongs_to :user
    belongs_to :climb

    validates :climb_id, uniqueness: { scope: :user_id, message: 'You have already completed this climb' }
end
