#Tell Ruby that we want to use one of the 
#pre-installed libraries in this current program

require 'sinatra' 


#Define some routes that our webserver will respond to. 
#I.e. this will be like a switchboard to a resource,
# or a seires of if/elsif statements responding to a browser requested paths

# Let's start with the root route "/"!

get '/' do
    
    #whatever the last thind in this block is will be returned as a response to a browser
    # this is a route handler
    "Hello World!"

end # get '/'

