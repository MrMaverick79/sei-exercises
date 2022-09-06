require 'rails_helper'

RSpec.describe Fruit, type: :feature do

    describe 'Loading the /fruits index' do
        
        before do
            shelf = Shelf.create name: 'test shel'
            3.times do |i| 

                Fruit.create name: "Fruit ##{i}", shelf_id: shelf.id
            end
            
            visit fruits_path #go to the index/fruits


        end

        it 'should have the correct heading' do
            puts page.body
            expect( page ).to have_css('div#heading', text: /fruit/i) 
        end

        it 'lists the fruit from the DB ' do
            expect( page).to have_css('ul > li', text:'Fruit #0')
            expect( page).to have_css('ul > li', text:'Fruit #1')
            expect( page).to have_css('ul > li', text:'Fruit #2')
        end

    end #/fruits index



end #end describe Fruit feature