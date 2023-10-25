class CreateUserClimbs < ActiveRecord::Migration[7.1]
  def change
    create_table :user_climbs do |t|
      t.integer :climb_id
      t.integer :user_id

      t.timestamps
    end
  end
end

# remove completion status as an attribute