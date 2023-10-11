class CreateClimbingSets < ActiveRecord::Migration[7.1]
  def change
    create_table :climbing_sets do |t|
      t.string :set_name
      t.integer :week
      t.date :date_start
      t.date :date_end
      t.text :notes

      t.timestamps
    end
  end
end
