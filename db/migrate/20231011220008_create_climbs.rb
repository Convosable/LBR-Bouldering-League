class CreateClimbs < ActiveRecord::Migration[7.1]
  def change
    create_table :climbs do |t|
      t.integer :grade
      t.string :color
      t.integer :points
      t.integer :climbing_set_id

      t.timestamps
    end
  end
end
