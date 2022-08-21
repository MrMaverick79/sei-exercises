# Our pet site webserver

require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3' #connects sql
require 'pry'

#######ACTIVE RECORD SET UP##########

# Set up the connection to the DB
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',  # What kind of DB is this?
    database: 'database.db'
  )
  
  # Show us all the SQL you're saving us from writing
  ActiveRecord::Base.logger = Logger.new STDOUT
  
  # Close the connection after every request
  after do
    ActiveRecord::Base.connection.close
  end
#######END AR SET UP##########


# Below, we tell AR how to talk to our 'pets table
# By inhereting from the Base class, we are enabling all the
# AR Querying features within our oewn clas ands we allso tell AR 
# What the database tbale is called
# This is referred to as a model i.e. a way 
# of repreenting our db table 'pets.

class Pet < ActiveRecord::Base #Pet must be capitalised. It assumes the existence of a lower case 'pets' db. 
    #connects the Pet and Owner
    belongs_to :owner ##SINGULAR (this is AR controlling the relationships between tables)

    #AR will go anbd look for the sopecific pets belonging to an owner


end

class Owner < ActiveRecord::Base
    has_many :pets ##PLURAL has man is another AR feature 
end

# binding.pry #debugger
  
get '/' do
    erb :home
end

# # CRUD ROUES FOR PET # #

####### CREATE ##########

# 1. Blank form ('new')
get '/pets/new' do
    erb :new
end

# #2 .Form action submits here
post '/pets' do #this is a DIFFERENT route to $$ gets /pets $$
    Pet.create(
       name: params[:name],
       species: params[:species],
       description: params[:description],
       roundness: params[:roundness],
       alive: params[:alive],
       age: params[:age],
       image_url: params[:image_url]

    )
    redirect '/pets'  #back to /pets get

end #end post/pets



######## READ ###########

#1. Index (all rows in table)
get '/pets' do
    @results = Pet.all
    erb :index
end #end /pets index


#2. Show/Details (one row by id)
get '/pets/:id' do

    @pet = Pet.find params[:id] #get the id for the specifc pet
    erb :show

end


# ####### UPDATE ##########

# # 1. Pre-filled form using the item id
get '/pets/:id/edit' do
    # @pet= db_query("SELECT * FROM pets WHERE id = #{params[:id]};")
    # @pet = @pet.first 
    @pet = Pet.find params[:id]
    erb :edit
end #end get pets/:id/edit

# 2. form submit, perform DB updtae, redirect

post '/pets/:id' do

    pet = Pet.find params[:id]
    pet.update(
        name: params[:name],
        species: params[:species],
        description: params[:description],
        roundness: params[:roundness],
        alive: params[:alive],
        age: params[:age],
        image_url: params[:image_url], 
        owner_id: params[:owner_id]
 
    )

     redirect "/pets/#{params[:id]}"
end #end post pets/:id UPDATE

###### DELETE ########

# Delete
get '/pets/:id/delete' do
    
    Pet.delete params[:id]
    redirect '/pets'

end #end delete



#####OWNERS CRUD #######

##CREATE

# 1. Create Form
get '/owners/new' do
    erb :owners_new
end


# 2.  Post the form to /owbers

post '/owners' do #this is a DIFFERENT route to $$ gets/ owners
    Owner.create(
       name: params[:name],
       email: params[:email]

    )
    redirect '/owners'  #back to /pets get

end #end post/pets

##READ

# 1. Index ALL
get '/owners' do
    @owners = Owner.all
    erb :owners_index

end #end  get /owners

# 2. Show/ details for one owner by ID
get '/owners/:id' do

    @owner = Owner.find params[:id] #get the id for the specifc owner
    erb :owners_show

end


##UPDATE

# 1. Create a form
get '/owners/:id/edit' do
    # @pet= db_query("SELECT * FROM pets WHERE id = #{params[:id]};")
    # @pet = @pet.first 
    @owner = Owner.find params[:id]
    erb :owners_edit
end #end get pets/:id/edit

# 2. Post the edits 
post '/owners/:id' do

    owner = Owner.find params[:id]
    owner.update(
        name: params[:name],
        email: params[:email]
    )
     redirect "/owners/#{params[:id]}"
end #end post pets/:id UPDATE

##DESTROY

get '/owners/:id/delete' do
    
    Owner.delete params[:id]
    redirect '/owners'

end #end delete
