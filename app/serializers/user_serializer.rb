class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :first_name, :last_name, :image_url, :username, :email, :handicap, :points, :team_id, :full_name, :climbs, :climbs_by_grade, :admin
  belongs_to :team

  def full_name
    object.full_name
  end 

  def climbs_by_grade
    object.ordered_climbs_by_grade
  end

  def image_url
    if object.image.attached?
      rails_blob_url(object.image, only_path: true)
    end
  end

end