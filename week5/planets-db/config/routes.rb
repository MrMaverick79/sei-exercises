Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'planets#home' 

  #Planets CRUD


  # Create
    #1. Blank form  
  get '/planets/new' => 'planets#new', as: 'new_planet'

 #2. Form submits here, create planet redirect
  post '/planets'  => 'planets#create'


  #Read

  #1. Index page of all planets
  # Note the rails conventions here
  get '/planets'  =>  'planets#index'


  #2. Show details of one planet
  get '/planets/:id' => 'planets#show', as: 'planet'  #we are stating this for the helper to guide the paths
  
  #Update

  #1. Pre-filled form (i.e. requires Planet.find with params[:id])
  get '/planets/:id/edit' => 'planets#edit', as: 'edit_planet' 

  #2. Form submits here,  update and redirect to show
  patch '/planets/:id'  => 'planets#update'
  
  
  #Delete
  #Delete planet by id
  get '/planets/:id/delete' => 'planets#destroy', as: 'destroy_planet'

end

