class TeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :team_points, :slug

  has_many :users

  def slug
    object.slugify
  end

end
