Rails.application.routes.draw do
 
  
 
   # root page (get '/')
  root to: 'pages#home'

###### WORKS ########

resources :works ##This is the same as the long versioon below---it uses default CRUD routes. See 'localhost:3000/rails/info/routes



###### ARTISTS #########

  ##### Create #####
  # 1. Form 
  get '/artists/new' => 'artists#new', as: 'new_artist'


  # 2. Create and redirect
  post '/artists' => 'artists#create'

  ##### Read ####
  # 1. Index of all artists
  get '/artists' => 'artists#index'

  # 2. Details of a specific artist
  get '/artists/:id' => 'artists#show', as: 'artist'

  ##### Update #####
  #1. Pre-filled form based on the id
  get '/artists/:id/edit' => 'artists#edit', as: 'edit_artist'

  #2. Form submit, form update and redirect

  patch '/artists/:id' => 'artists#update'

  ##### Delete ####

  delete '/artists/:id/' => 'artists#destroy'

end
