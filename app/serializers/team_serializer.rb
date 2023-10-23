class TeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :team_points, :members


  ## rework nmembers serializer??
  def members
    ActiveModel::SerializableResource.new(object.members, each_serializer: UserSerializer)
  end
end
