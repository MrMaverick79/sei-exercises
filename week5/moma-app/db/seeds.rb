# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

## 

Artist.destroy_all #refresh the db

lee = Artist.create!( 

    name: 'Lee Krasner',
  
    nationality: 'USA',
  
    dob: '1908/10/27',  # MUST use the right string format for date fields
  
    period: '20th century',
  
    image: 'https://i.pinimg.com/736x/05/62/14/0562148ce05f206e7ad773dc65d565bc--lee-krasner-abstract-expressionism.jpg',
  
    roundness: 7,
  
    bio: 'Abstract Expressionist'
  
)
  
ernst = Artist.create!( 
  
    name: 'Max Ernst',
  
    nationality: 'German',
  
    dob: '1891/04/02',  # MUST use the right string format for date fields
  
    period: '20th century',
  
    image: 'http://www.max-ernst.com/images/max-ernst-photo.jpg',
  
    roundness: 8,
  
    bio: 'Surrealist'
  
)
  
holzer = Artist.create!( 
  
    name: 'Jenny Holzer',
  
    nationality: 'USA',
  
    dob: '1950/05/15',  # MUST use the right string format for date fields
  
    period: '20th century',
  
    image: 'https://pyxis.nymag.com/v1/imgs/98b/5ab/df3799dcec0cbc7ade43fd4f8bda7563bd-jenny-holzer-1.rvertical.w1200.jpg',
  
    roundness: 5,
  
    bio: 'Conceptual/Text'
  
)


andy = Artist.create!(
    name: 'Andy Warhol',
    nationality: 'USA',
    dob: '1942/10/11',  #this needs to be on the correct order
    period: '20th century',
    roundness: 24,
    image: 'https://4683oj4f91va37g8dg1g1myv-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/1998-1-2890_pub_01-Web-Ready-475px-longest-edge-Check-Copyright-Before-Using-on-Web.jpg',
    bio: 'Most famous of the pop culture post-modernists'


)



al = Artist.create!(
    name: 'Albert Namatjira',
    nationality: 'Australian',
    dob: '1902/06/28',  #this needs to be on the correct order
    period: '20th century',
    roundness: 150,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Albert_Namatjira_portrait.jpg',
    bio: 'Indigineous landscape painter'


)


johnny = Artist.create!(
    name: 'Johnny K',
    nationality: 'Australia',
    dob: '1988/04/15',  #this needs to be on the correct order
    period: '21st century',
    roundness: 7,
    image: 'https://static.wixstatic.com/media/986b37_3bcfc634b0a641b895af7a5e080ca787~mv2_d_6016_4016_s_4_2.jpeg/v1/fill/w_288,h_316,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ENwfoX_o.jpeg',
    bio: 'Australian landscape painter'


)

puts "done! Created #{ Artist.count } artists:"
puts Artist.pluck( :name).join(", ")


#===================WORKS ===================####

Work.destroy_all


Work.create!(
    title: 'Head in the clouds',
    year: '2021',
    medium: 'Oil on canvas',
    style: 'Landscape, modern',
    image: 'https://images.squarespace-cdn.com/content/v1/524a9fa7e4b025e8f3303124/1648008741515-ZCCC27FANDMHO4M7HG6H/Johnny+K+The+Lovers+Dance%2C+2022+Oil%2C+House+Paint+and+Aerosol+on+Polyester152+x+152+cm.jpeg?format=750w',
    artist_id: johnny.id
    


)

Work.create!(
    title: 'Animals with food',
    year: '1934',
    medium: 'Oil on canvas',
    style: 'Abstract Expressionism',
    image: 'https://media.tate.org.uk/art/images/work/T/T03/T03291_10.jpg',
    artist_id: lee.id


)

Work.create!(
    title: 'Sleeping Bulls',
    year: '1944',
    medium: 'Oil on canvas',
    style: 'Cubism',
    image: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1914/01/48.1172.280_web.jpg?w=870',
    artist_id: lee.id
)

Work.create!(
    title: 'Out of the depths',
    year: '2010',
    medium: 'Oil on canvas',
    style: 'Weird',
    image: 'http://www.dandy-club.com/wp-content/uploads/2013/01/main.jart2_.jpg',
    artist_id: ernst.id
)

Work.create!(

    title: 'Gothic Landscape',
  
    year: '1961',
  
    medium: 'oil on canvas',
  
    style: 'abstract expressionism',
  
    image: 'https://media.tate.org.uk/art/images/work/T/T03/T03291_10.jpg',
    artist_id: ernst.id
)
  

Work.create!(
  
    title: 'Protect Me From What I Want',
  
    year: '1988',
  
    medium: 'text',
  
    style: 'conceptual/text/multimedia',
  
    image: 'https://www.sleek-mag.com/wp-content/uploads/2019/03/jenny-holzer-protect-me-times-square.jpg',
    artist_id: andy.id
)
  
Work.create!(
  
    title: 'Some Days You Wake Up...',
  
    year: '1998',
  
    medium: 'text/bronze',
  
    style: 'conceptual/text',
  
    image: 'https://www.moma.org/media/W1siZiIsIjIwMTQ4NiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f4a128f8dd237338',
    artist_id: andy.id
)
  
Work.create!(
  
    title: 'City with Animals',
  
    year: '1930',
  
    medium: 'oil on wood',
  
    style: 'surrealism/cubism',
  
    image: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1914/01/48.1172.280_web.jpg?w=870',
    artist_id: holzer.id
)
  
Work.create!(
  
    title: 'Die Versuchung des heiligen Antonius',
  
    year: '1930',
  
    medium: 'oil on wood',
  
    style: 'surrealism/cubism',
  
    image: 'http://www.dandy-club.com/wp-content/uploads/2013/01/main.jart2_.jpg',
    artist_id: holzer.id
  
)

puts "Created #{ Work.count } artworks"
puts Work.pluck( :title).join(", ")