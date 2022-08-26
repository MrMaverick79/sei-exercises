class Genre < ApplicationRecord

    has_and_belongs_to_many :songs
    #This is for a many to many connection. It assumes the genre_songs join table already exists and has columns: genre_id and songs_id AKA: HABTM

    has_many :artists, through: 'songs'

    

end
