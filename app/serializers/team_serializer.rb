class TeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :team_points

  has_many :users
end
