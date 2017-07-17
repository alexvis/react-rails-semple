class CreateCereals < ActiveRecord::Migration[5.0]
  def change
    create_table :cereals do |t|
      t.string :name, null: false
      t.string :description, null: false

      t.timestamps
    end
  end
end
