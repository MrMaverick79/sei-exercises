Rails.application.routes.draw do
 
  #SPA home route:
  get '/dashboard' => 'dashboard#app'


  #AJAX api endpoints - these routes return JSON data for axios requests
  get '/uptime' => 'dashboard#uptime'

  get '/cpuhog' => 'dashboard#hog'

  #API endopoints for the Message model (using CRUD conventions)
  get '/messages' => 'messages#index'
  get '/messages/:id' => 'messages#show'

    #You could also use : resouced :messages, only: [:index, :show]

  get '/messages/search/:query' => 'messages#search' #custom route, not part of CRUD

end
