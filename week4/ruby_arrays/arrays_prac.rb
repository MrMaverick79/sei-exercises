require 'pry'
# 1. Create an array of the days of the week

#     Create a variable named days_of_the_week as an array of the following:
#         Monday
#         Tuesday
#         Wednesday
#         Thursday
#         Friday
#         Saturday
#         Sunday

days_of_the_week = %w/ Monday Tuesday Wednesday Thursday Friday Saturday Sunday / 
puts "Original array: #{days_of_the_week}"

# 2. My calendar says the first day is Sunday...

#     Remove Sunday from the last postion and move it to the first position. Use array methods.

# binding.pry <== for debugging

days_of_the_week.pop
puts "Let's take off Sunday: #{days_of_the_week}"
days_of_the_week.unshift("Sunday")
puts "...and place it at the start of the week: #{days_of_the_week}"

# 3. Create a new array of the days of the week :

#     Re-create the original days_of_the_week array first, to undo the modifications from #2
# Use the values from that array to create a new array whose elements are also arrays, i.e. a nested array
#     The first inner array should be the weekdays
#     The second inner array should be the weekend days
days_of_the_week.shift
puts "We have now taken Sunday back off:  #{days_of_the_week}"
days_of_the_week << "Sunday"
puts "...and put it back at the end: #{days_of_the_week}"

new_arr = [days_of_the_week[0..4], days_of_the_week[5, 6]]
puts "This is new_arrr: #{new_arr}"
# 4. Remove either the weekdays or the weekends
new_arr.pop
puts "Now the weekends should be gone: #{new_arr}"
# Your choice...
# 5. Sort the remaining days alphabetically
new_arr.flatten!  #removes the nesting
new_arr.sort!  #sorts in place
puts "Now the new_arr should be flattened and sorted in alphabetical order: #{new_arr}"
