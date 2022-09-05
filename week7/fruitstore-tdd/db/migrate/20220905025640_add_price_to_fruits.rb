class AddPriceToFruits < ActiveRecord::Migration[7.0]
  def change
    add_column :fruits, :price, :decimal
  end
end
