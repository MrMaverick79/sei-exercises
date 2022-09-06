require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

    describe 'GET #index' do

        before do #this is scoped for this block-- i.e. only related to the GET # index
            @shelf = Shelf.create name: 'test shelf'

            #create some fruit before hand

            3.times do |i|
                Fruit.create! name: "Test Fruit #{i}", shelf_id: @shelf.id
            end
            @test_fruits = Fruit.all
            get :index
        end

        it 'returns HTTP success' do
            expect( response ).to have_http_status(:success)

        end #it 'should return HTTP success'


        it 'renders the index template' do
            expect( response ).to render_template( :index )
        end

        it 'assigns the instance variable @fruits' do
            expect( assigns(:fruits)).to be #i.e., does it exist
        end



        it 'assigns @fruits to assign all the fruits in the DB table' do
            expect(assigns(:fruits).length).to eq @test_fruits.length
            expect(assigns(:fruits).first).to be_a Fruit
            

        end

        # Fruits should be listed in the reverse order
        it 'assigns to @fruits the DB fruits in the reverse order' do
            expect( assigns(:fruits).first.name).to eq @test_fruits.last.name
            expect( assigns(:fruits).last.name).to eq @test_fruits.first.name
            
        end



    end #describe #GET index
    #You could do the same with GET #show etc

    #Resting POST
    describe 'POST to #create' do

        describe 'a fruit with valid information' do

            before do
                #Fake a form post which creates a new Fruit
                post :create, params: {
                    fruit: {
                        name: 'Strawberry',
                        shelf_id: Shelf.create( name: 'test').id
    
                    }
                }

            end #end before

            it 'should increase the numbers of fruits in the Db by 1' do
                expect( Fruit.count ).to eq 1
            end

            it 'should create a fruit using the correct form fields' do
                expect( Fruit.first.name).to eq 'Strawberry'
            end

            it 'should redirect to the show action for the created fruit' do
                expect( response ).to redirect_to( Fruit.first )
            end

        end #valid

        describe 'a fruit with invalid information' do
            before do
                #Fake a FORM post with a field missing
                post :create, params: {
                    fruit: {
                        name: '', #Invalid
                        shelf_id: Shelf.create( name: 'test').id
    
                    }
                }


            end

            it 'should not increase the numbers of Fruit in the DB' do
                expect( Fruit.count ).to eq 0
            end

            it 'should render the new template' do
                expect( response ).to render_template( :new )
            end

        end #invalid

    end



end  #end describe FruitsController