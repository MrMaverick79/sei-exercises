class Work < ApplicationRecord
    
    #Looks art the artist_id col and finds the artist associated with this artwork
    belongs_to :artist

end
