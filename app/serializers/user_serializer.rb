class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :handicap, :points, :team_id, :full_name, :climbs

  def full_name
    object.full_name
  end 

end