class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :handicap, :points, :team_id, :full_name, :climbs
  # belongs_to :team
  # causes an infinite loop for some reason :/

  def full_name
    object.full_name
  end 

end