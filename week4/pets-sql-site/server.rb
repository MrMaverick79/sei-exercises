# Our pet site webserver

require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3' #connects sql
require 'pry'

#Connect to our sql database:
db = SQLite3::Database.new 'database.db' #the filename here is the file that stores our db and it is now stored in db object
db.results_as_hash = true
#we can use the built in method .execute, in db, that allows us to use SQL commands

#db.execute "SQL GOES HERE"


# refactoinrg the db query into a function
def db_query ( sql )
    #Debug
    puts "==================\n\n"
    puts sql
    puts "==================\n\n"

    db = SQLite3::Database.new 'database.db'    
    db.results_as_hash = true

    results = db.execute sql
    

    db.close #this needs to be done after the query
    results

end #end db_query


get '/' do
    erb :home
end

# CRUD notes

# Create

# 1. Blank form ('new')
get '/pets/new' do
    erb :new
end

#2 .Form action submits here
post '/pets' do #this is a DIFFERENT route to gets /pets
    insert_sql = "
        INSERT INTO pets ( name, species, description, roundness, age, alive, image_url)
        VALUES (
            '#{params[:name]}',
            '#{params[:species]}',
            '#{params[:description]}',
            #{params[:roundness]},
            #{params[:age]},
            #{params[:alive]},
            '#{params[:image_url]}'
        );   
    "

    #debugger
    # insert_sql

    db_query insert_sql

    # we need to then redirec just in case the user relaoad pets, would duplicate the insert

    redirect '/pets' #go to the index

end #end post '/pets'


# Read

#1. Index (all rows in table)
get '/pets' do
    ######OLD VERSION OF DB QUERY #######
    #     #Connect to our sql database:
    # db = SQLite3::Database.new 'database.db' #the filename here is the file that stores our db and it is now stored in db object. This needs to be called each time. 
    # db.results_as_hash = true
    # #we can use the built in method .execute, in db, that allows us to use SQL commands
    @results= db_query( 'SELECT * FROM pets;')
    

    erb :index
end #get /pets index

#2. Show/Details (one row by id)
get '/pets/:id' do
    # "Pet id: #{params[:id]}" #We can access the id through this.
    
    #  #Connect to our sql database:
    #  db = SQLite3::Database.new 'database.db' #the filename here is the file that stores our db and it is now stored in db object. This needs to be called each time. 
    #  db.results_as_hash = true
    #  #we can use the built in method .execute, in db, that allows us to use SQL commands
     @pet= db_query("SELECT * FROM pets WHERE id = #{params[:id]};")
     @pet = @pet.first #saves us from doing @pet[0] every time in our template 



    erb :show

end


# Update

# 1. Pre-filled form using the item id
get '/pets/:id/edit' do
    @pet= db_query("SELECT * FROM pets WHERE id = #{params[:id]};")
    @pet = @pet.first 
    erb :edit
end #end get pets/:id/edit

# 2. form submit, perform DB updtae, redirect
# Delete