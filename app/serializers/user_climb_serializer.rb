class UserClimbSerializer < ActiveModel::Serializer
  attributes :id, :completion_status, :climb_id, :user_id
end
