require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

#one-off setup to initialise lookup gem
StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')


get '/' do
    erb :home
end

#show a form
get '/lookup' do
    erb :form
end

#form above submits to here
get '/lookup/results' do
    
    stock_code = params[:stock_code]
     
    stock = StockQuote::Stock.quote stock_code
    @company_name  = stock.company_name
    @stock_price = stock.latest_price

    @fake_array = [
        'groucho',
        'harpo',
        'chico'
    ]

    


    erb :results
end