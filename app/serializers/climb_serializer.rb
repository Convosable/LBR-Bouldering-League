class ClimbSerializer < ActiveModel::Serializer
  attributes :id, :grade, :color, :climbing_set_id
  belongs_to :climbing_set
end
