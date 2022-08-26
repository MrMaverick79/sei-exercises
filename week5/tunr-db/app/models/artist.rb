class Artist < ApplicationRecord

    has_many :songs
    has_many :albums, through: 'songs' 
    has_many :genres, through: 'songs' 
    
    #Here, the 'through' is the association that you have to make first. That is, and artist has many albums that there songs are on, so we can ask ActiveRecord to look for it via the shared table songs. 

end
