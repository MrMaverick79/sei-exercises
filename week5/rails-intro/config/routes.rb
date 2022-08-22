Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  #these are for simple, static web apps that do not use dbs
  get '/hello' => 'pages#say_hi'
  get '/funny' => 'pages#haha'

                  #Controller#Action

  #dynamic version. :person wll be a variable 
  get '/hello/:person' => 'pages#greet'


  #calculator

  get 'calc/:first/:op/:second' => 'calculator#calculon'


  #form based calculator
  
  #1. show the form
  get '/calc'   => 'calculator#home'

   #2 Form subm,it, show results
   #note we ran reuse calcuon here as it reuses the same variable names, i.e. @first etc which are the same in the forms submitted query string and the calulon method. Basically it is all params
  get '/calc/answer' => 'calculator#calculon'

 



end
