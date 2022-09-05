class AddNameToFruits < ActiveRecord::Migration[7.0]
  def change
    add_column :fruits, :name, :string
  end
end
