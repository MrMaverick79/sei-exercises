# Array and Hash access
require 'pry'
##NB: the puts are here to log to the console##

# A. Given the following data structure:

a = ["Anil", "Erik", "Jonathan"]

#     How would you return the string "Erik"?
puts a[1]
#     How would you add your name to the array?
a << "Brendan"
puts a
# B. Given the following data structure:

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

#     How would you return the string "One"?
puts h[1]
#     How would you return the string "Two"?
puts h[:two]
#     How would you return the number 2?
puts h["two"]
#     How would you add {3 => "Three"} to the hash?
h[3]  = "Three"
#     How would you add {:four => 4} to the hash?
h[:four] = 4
puts h
# C. Given the following data structure:

is = {true => "It's true!", false => "It's false"}
#     What is the return value of is[2 + 2 == 4]?
puts is[2+2 ==4] ##"It's true!"
#     What is the return value of is["Erik" == "Jonathan"]?
puts is["Erik" == "Jonathan"]  ##"It's false"
#     What is the return value of is[9 > 10]?
puts is[9>10] #"It's false"
#     What is the return value of is[0]?
puts "Is[0] #{is[0]}" #nil?
#     What is the return value of is["Erik"]?
puts is['Erik']

# D. Given the following data structure:

users = {
      "Jonathan" => {
            :twitter => "tronathan",
            :favorite_numbers => [12, 42, 75],
          },
          "Erik" => {
                :twitter => "sferik",
                :favorite_numbers => [8, 12, 24],
              },
              "Anil" => {
                    :twitter => "bridgpal",
                    :favorite_numbers => [12, 14, 85],
                  },
                }
                
                # binding.pry 
                #     How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
                users["Jonathan"][:twitter]
                #     How would you add the number 7 to Erik's favorite numbers?
                users["Erik"][:favorite_numbers] << 7

                #     How would you add yourself to the users hash?
                users["Brendan"] = { twitter: "newtr1ck", favorite_numbers: [13, 99, 14367]}


                #     How would you return the array of Erik's favorite numbers?
                users["Erik"][:favorite_numbers]
                #     How would you return the smallest of Erik's favorite numbers?
                users["Erik"][:favorite_numbers].min

                #     How would you return an array of Anil's favorite numbers that are also even?
                users["Anil"][:favorite_numbers].select {|a| a.even?}

                #     How would you return an array of the favorite numbers common to all users?
                common = users['Jonathan'][:favorite_numbers]

                puts "Common:", common
                users.values.each do | info|
                    p info[:favorite_numbers]
                    common = common & info[:favorite_numbers]
                    common
                end
                puts "common: #{common}"
                #     How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
                all_numbers = users.values.map do |info| 
                    info[:favorite_numbers]
                end
                all_numbers.flatten!
                all_numbers.sort!
                all_numbers.uniq!

                puts all_numbers