class AddTypeToFruits < ActiveRecord::Migration[7.0]
  def change
    add_column :fruits, :type, :string
  end
end
