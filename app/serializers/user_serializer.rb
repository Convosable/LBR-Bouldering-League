class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :handicap, :points, :team_id, :full_name, :climbs, :climbs_by_grade
  belongs_to :team

  def full_name
    object.full_name
  end 

  def climbs_by_grade
    object.ordered_climbs_by_grade
  end

end