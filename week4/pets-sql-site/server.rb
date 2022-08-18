# Our pet site webserver

require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3' #connects sql
require 'pry'

#Connect to our sql database"
db = SQLite3::Database.new 'database.db' #the filename here is the file that stores our db

binding.pry

