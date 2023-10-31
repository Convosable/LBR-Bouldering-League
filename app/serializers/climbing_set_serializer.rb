class ClimbingSetSerializer < ActiveModel::Serializer
  attributes :id, :set_name, :week, :date_start, :date_end, :notes, :climbs, :formatted_start_date, :formatted_end_date
end
