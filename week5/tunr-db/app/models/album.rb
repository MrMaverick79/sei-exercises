class Album < ApplicationRecord

    has_many :songs
    has_many :artists, through: 'songs'

    def artist
        self.artists.first #ignore duplicates  that would occur with Album.first.artists 
    end

    def song_titles
        self.songs.pluck(:title).join(", ")
    end


    #Nice formatting of album title + artist name

    def to_s #replaces the default method of "puts" to show the below instead of the garbled hash response. 
        "'#{self.title}' by #{self.artist.name}"
    end

end
