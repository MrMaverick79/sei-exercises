# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


print "Creating songs"

Song.destroy_all

s1 = Song.create! title: "Achy Breaky Heart"
s2 = Song.create! title: "Draw Us In"
s3 = Song.create! title: "Burn the witch"
s4 = Song.create! title: "Identikit"


puts "created #{ Song.count} songs"


Artist.destroy_all
art1= Artist.create! name: 'Billy Ray Curcus'
art2 = Artist.create! name: "Metz"
art3 = Artist.create! name: 'Radiohead'


puts "Created #{Artist.count} artists"


#create associations from artists to thier songs


art1.songs << s1 #THIS ACTUALLY updates THE SONGS TABLE

#This means that "The song has its artist_id set to art1.id. It is something like s1.updtate artist_id: art1.id"

art2.songs << s2 #Draw us in (s2) beliongs os art2

art3.songs << s3 << s4  #both these songs belong to the same artist


##Test these associations

puts "Testing artist -< songs associations"
puts "* the song '#{Song.first.title}' is by #{Song.first.artist.name}."
puts "* the artist #{Artist.last.name} has the following songs: #{Artist.last.songs.pluck(:title).join(', ') }"

#################3###################3

print "Creating albums..."

Album.destroy_all

alb1 = Album.create! title: 'Some Gave All', year:'1992'
alb2 = Album.create! title: 'Atlas', year:'2021'
alb3 = Album.create! title: 'A Moon-shaped Pool', year:'2016'

puts "Created #{Album.count} albums"

# Create associations between album  and song

alb1.songs << s1
alb2.songs << s2 
alb3.songs << s3 << s4

puts "Testing album has many songs association:"
puts " * the song ' #{Song.first.title} 'is on the album '#{Song.first.album.title}' "
puts "* The album '#{Album.last.title} 'has the songs #{Album.last.songs.pluck(:title).join(", ")}"

######## Genres ##########

Genre.destroy_all

g1 = Genre.create! name: "Post Punk"
g2 = Genre.create! name: "Math Rock"
g3 = Genre.create! name: "Sadcore"
g4 = Genre.create! name: "Country"
g5 = Genre.create! name: "IDM"
g6 = Genre.create! name: "Pop"

puts "Created #{Genre.count} genres"

## Associations -many to many Genre < -- > Song. In other words, in the join table genres_songs, create a new row with the song_id s1 a

s1.genres << g5 

# The song below has several Genres
s2.genres << g3 << g6 << g2 << g4 <<g1

s3.genres << g1 << g5 << g4 << g3

g5.songs << s3 << s1
## Test the genres --<>--- songs association.

puts "Genre #{g3.name} has songs #{g3.songs.pluck(:title).join(", ")}"

puts "Song #{s2.title} has genres: #{s2.genres.pluck(:name).join(", ")}"
 

###### Mixtapes #####


print "Creating mixtapes...."

Mixtape.destroy_all

m1 = Mixtape.create! name: 'Code Jams'
m2 = Mixtape.create! name: "Post-Covid dance party"
m3 = Mixtape.create! name: "Make-out music"

puts "Created #{Mixtape.count} mixtapes."


#### Associations for mixtapes  --< > songs #######

m1.songs << s1 <<s3 << s4
m2.songs << s2 << s3
m3.songs << s1 << s2 <<s3 << s4

puts "The mixtape '#{m1.name}' has the following songs: #{m1.songs.pluck(:title).join(", ")}"



################ Creating Users ##############33

User.destroy_all

u1 = User.create! email:'like@ga.co', name: 'Luke', password: 'chicken'
u2 = User.create! email:'kris@ga.co', name: 'Kris', password: 'chicken'
u3 = User.create! email:'shayni@ga.co', name: 'Shayni', password: 'chicken'

puts  "Created #{User.count} users"

# Add user / mixtape associations

u1.mixtapes << m1 << m2  << m3
u2.mixtapes << m2  

puts "User #{u1.name} has mixtapes: #{u1.mixtapes.pluck(:name).join(', ')}"
puts "Mixtape #{m1.name} belongs to #{m1.user.name}"