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