puts "Drinking Age"

# 1. Drinking age?

#     Ask the user for their age.
#         Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
#     If age is less than 18, print an appropriate message.
#     If the age is equal to or over 18, print a different message.
print "Please enter your age:" #print does not insert a new line
age = gets.chomp.to_i 

if age < 18
    puts "You are not able to drink."
else 
    puts "You are old enough to drink."
end