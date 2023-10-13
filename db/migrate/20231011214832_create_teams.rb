class CreateTeams < ActiveRecord::Migration[7.1]
  def change
    create_table :teams do |t|
      t.string :team_name
      t.integer :team_points, default: 0

      t.timestamps
    end
  end
end
