class ClimbSerializer < ActiveModel::Serializer
  attributes :id, :grade, :color, :climbing_set_id
  
end

## belongs to set???