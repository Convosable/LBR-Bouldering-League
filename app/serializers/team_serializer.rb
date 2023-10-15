class TeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :team_points, :members

  def members
    object.members
  end
end
