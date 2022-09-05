class AddShelfIdToFruits < ActiveRecord::Migration[7.0]
  def change
    add_column :fruits, :shelf_id, :integer
  end
end
