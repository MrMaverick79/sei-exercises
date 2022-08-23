# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Planet.destroy_all #Deletes current table (It still exists but has -0 rows) That is, you do not need to run the migration again.
puts "Destroying planets...."
 
#To actually run these lines and save and create items in the DB, you need to run the temrinal command: 
# rails db:seed

Planet.create!( #the ! here is verbose, and will throw error is 
    name: 'Earth',
    image_url: 'https://scitechdaily.com/images/earth-losing-mass.jpg',
    orbit: 1,
    mass: 1,
    moons: 1

)

Planet.create!( #the ! here is verbose, and will throw error is 
    name: 'Mars',
    image_url: 'https://space-facts.com/wp-content/uploads/mars.jpg',
    orbit: 60,
    mass: 0.1,
    moons: 2

)
Planet.create!( #the ! here is verbose, and will throw error is 
    name: 'Venus',
    image_url: 'https://cdn.mos.cms.futurecdn.net/pNX8eVGowB6WT8tyrTMufk-1200-80.jpg',
    orbit: 0.5,
    mass: 0.2,
    moons: 1

)

Planet.create!( #the ! here is verbose, and will throw error is 
    name: 'Jupiter',
    image_url: 'https://blogs.nasa.gov/webb/wp-content/uploads/sites/326/2022/08/JWST_2022-07-27_Jupiter.png',
    orbit: 400,
    mass: 10_000,
    moons: 13

)

puts "Done! Created #{ Planet.count } planets."
puts Planet.pluck( :name ).join(', ')