class MessagesController < ApplicationController

    def index
        render json: Message.all
    end
    

    def show
        render json: Message.find( params[:id] )
    end

    def search
        render json: Message.where('content ILIKE ?', "%#{params[:query]}%") #the % here are part of a substring search. That is, the search params can appear anywhere within a larger string.  The I in ILIKE is case insensitive; LIKE is an SQL fuzzy search. 
        # You can add fields by adding OR description ILIKE ? %otherthing%
    end

end
