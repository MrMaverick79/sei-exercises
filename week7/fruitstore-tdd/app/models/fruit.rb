class Fruit < ApplicationRecord
    belongs_to :shelf, optional: true
    # def squishy?
    #     false
    # end
    validates :name, presence: true

end
