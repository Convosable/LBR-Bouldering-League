class ClimbingSetSerializer < ActiveModel::Serializer
  attributes :id, :set_name, :week, :date_start, :date_end, :notes, :climbs
end
