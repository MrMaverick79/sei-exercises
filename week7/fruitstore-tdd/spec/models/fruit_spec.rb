require 'rails_helper' #load up Rails context for this test file

# Describe blocks are containers for multiple specific test examples that belong togetyher. Ie. We are wriing test for the fruit model.
RSpec.describe Fruit, type: :model do
    
    #before block--refactor the code 
    #runs before each specific example (i.e blokc below)
    # this allows us to dry up our codes to make our assertions (only). Sometimes you mighht
    #need to include specific actions.
    before do
        shelf = Shelf.create name: 'test shelf'
        Pear.create name: 'nashi', price: 2, shelf_id: shelf.id
        @fruit_retrieved = Pear.first

    end #before block

    #we next provide a series of 'examples' as 'it' blocks.
    it 'should create a valid Fruit object' do
        
        #AAA: Arrange, Act(do the thing), Assert (did it work?)

        # Fruit.create #run some actual code (Act)
        # @fruit_retrieved = Fruit.first
        
        #Assert - did the app code actually work properly?
        # Rspec has its own special syntax for expressing their assertions.
        expect( @fruit_retrieved ).to_not be_nil #assert that it is not nil

        expect( @fruit_retrieved).to be_a Fruit #assert that its actuially a Fruit instance
    
    end #end 'should create a valid fruit object'

    it 'should remember its name' do
        
        # Fruit.create name: "nashi"
        
        # @fruit_retrieved = Fruit.first #there is an implicit destroy all in each example

        expect( @fruit_retrieved.name ).to eq 'nashi'

    end #end should remember its name'

    it 'should remember its price' do
        # Fruit.create name: 'nashi', price: 2
        # @fruit_retrieved = Fruit.first
        expect( @fruit_retrieved.price).to eq 2

    end  #should remember its price


    it 'should remember its class via Single Table Inheritance' do
        expect(@fruit_retrieved.class).to eq Pear
        expect(@fruit_retrieved).to be_a Pear

    end #should remember its class via Single Table Inheritance

    it 'should not consider Fruits to be pairs' do
        expect( Pear.count).to eq 1

        # Add a fruit and check that the count has not changed the number of Pears
        Fruit.create name: "basic fruit"
        expect( Pear.count ).to eq 1

    end #'should not consider Fruits to be pairs'


    it 'should be squishy (if a Pear)' do

        #predicate method: .squishy?
        expect( @fruit_retrieved.squishy? ).to eq true

    end

    it 'should not be squishy (if a base Fruit)' do
        normal_fruit =  Fruit.create name: "base fruit"
        expect{(normal_fruit.squishy?)}.to raise_error(NoMethodError)
    end

    #Test AR validations
    it 'should fail validation when created without a name' do
        pear = Pear.create
        expect( pear ).to be_invalid
        
    end

    it 'should validate the uniqueness of the name' do
        pear_duplicate = Pear.create name: 'nashi'
        expect( pear_duplicate).to be_invalid
        #expect( Pear.count ).to be 1 <-overklill as it is related to the framework (i.e invalid data in active record is not added to the DB)

    end

    # test the assoiciation of Fruit belongs to shelf. The one line version comes from the gem 'shoulda matchers'
    #Rspec will work out that the 'subject' is the Fruit model itself
    # it { should belong_to(:shelf).Fruit }

end #describe Fruit