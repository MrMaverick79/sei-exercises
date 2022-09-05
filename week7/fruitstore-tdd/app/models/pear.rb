#single table inheritance: "A pear is a type of fruit"
#We want to use the Fruits table
#to store other types of fruit - i.e
# not make a uinque table for each one, 
# and we might want them to share some 
# methods of the base class
class Pear < Fruit

    def squishy?
        true #hardcoded value
    end
    
    validates :name, presence: true, uniqueness: true
end