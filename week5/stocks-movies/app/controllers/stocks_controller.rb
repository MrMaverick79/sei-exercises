class StocksController < ApplicationController

        def welcome

        end #welcome
    
        def form

        end #form

        def lookup
            @stock_code = params[:stock_code]

            #lookup using gem
            #no need for require
            #add gem to the Gemfile 
            #the run bundle install
            #from the terminal while
            # the server is stopped.
            # You can now use the gem from anywhere.
            StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

            @results = StockQuote::Stock.quote @stock_code

            # raise 'hell' #deliberately trigger an error to get a temrinal in the browser for debugging

            
        end #end lookup




end #end stocks controller