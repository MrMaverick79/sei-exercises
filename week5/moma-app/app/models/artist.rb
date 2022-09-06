class Artist < ApplicationRecord
    #Tell AR look at the artist_id column of the works table, to find out which works belong to this artist.
    has_many :works

end
