class AddNameToClimbs < ActiveRecord::Migration[7.1]
  def change
    add_column :climbs, :name, :string
  end
end
