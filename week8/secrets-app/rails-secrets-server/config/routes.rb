Rails.application.routes.draw do
 

  # API endpoints for Secret model
  # to be used by React frontent AJAX requests


  get '/secrets' => 'secrets#index' #Secret.all

  post '/secrets' => 'secrets#create' #Secrete.create




end
