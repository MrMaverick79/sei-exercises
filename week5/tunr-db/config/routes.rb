Rails.application.routes.draw do
   
  

 
  root to: 'pages#home' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/login' => 'session#new'  #show login form
  post '/login' =>  'session#create'  #form submit
  delete '/login' => 'session#destroy' #


  resources :mixtapes, :users

end
