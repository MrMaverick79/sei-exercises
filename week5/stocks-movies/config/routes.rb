Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #create a home page (wihout having to use get '/' => somecontroller#someMethod):
  root to: 'stocks#welcome'

  #1. Search form
  get '/stocks'  => 'stocks#form'

  #2 Form submit, use gem to perform lookup, show results
  get 'stocks/lookup' => 'stocks#lookup'

  #######Movies ##########

  #1. Search form
  get '/movies'  => 'movies#form'

  # Form submit
  get '/movies/lookup' => 'movies#lookup'



end #end of Rails.application.routes.draw
