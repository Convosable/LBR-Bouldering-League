class ClimbingSetSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :set_name, :week, :image_url, :date_start, :date_end, :notes, :climbs, :formatted_start_date, :formatted_end_date

  def image_url
    if object.image.attached?
      rails_blob_url(object.image, only_path: true)
    end
  end
end
