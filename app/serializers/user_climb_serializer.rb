class UserClimbSerializer < ActiveModel::Serializer
  attributes :id,:completed, :climb_id, :user_id
end
