#Tell Ruby that we want to use one of the 
#pre-installed libraries in this current program

require 'sinatra' 
require 'sinatra/reloader' #auto-restart on changes


#Define some routes that our webserver will respond to. 
#I.e. this will be like a switchboard to a resource,
# or a seires of if/elsif statements responding to a browser requested paths

# Let's start with the root route "/"!

get '/' do
    
    #whatever the last thind in this block is will be returned as a response to a browser
    # this is a route handler
    
    # "<!DOCTYPE html>
    # <html>
    # <h1>Hello World!!!</h1>\n
    # <h2>This should be live!<h2>
    # </html>"

    #erb expects by conventions expects to find views/home.erb
    erb :home

end # get '/'


get '/about' do
    "Welcome to the about page"

end #get #about

get '/lucky-number' do
    @number = rand 100
    erb :"lucky-number"

end #get /lucky-number

get '/hello/pip' do #this would require hardscoding for all options so insetead, we use dynamic routes(below)
    "Hello Pip!"

end # get hello/pip


#Dynamic routes - have placeholders (variable) in them. We can define a pattern for a route,and find out what specific string replace the placeholder

get '/hello/:student_name' do #the colon here means that it is a variable
    "Hello #{ params[:student_name]}" #params refers to the key in the url
end  #end dynamic routes
#position matters--if this route was first, it would supercede the route above, for pip.

get '/greeting/:name/feels/:mood' do
    @name = params[:name].capitalize
    erb :greeting

end # end get '/greeting/:name/feels/:mood'
