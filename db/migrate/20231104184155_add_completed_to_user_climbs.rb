class AddCompletedToUserClimbs < ActiveRecord::Migration[7.1]
  def change
    add_column :user_climbs, :completed, :boolean
  end
end
