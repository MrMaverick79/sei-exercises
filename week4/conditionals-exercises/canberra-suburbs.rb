
    # Create a program that asks what suburbs you live in.
    # Depending on the answer, print an appropriate response of your choosing (you should be able to give a custom response for at least 3 different suburbs).
    # If the program does not recognise the suburb, print a generic message like "Sounds nice!"
    # BONUS: use a case statement instead of an if-elsif chain to solve the suburbs exercise.

puts "Suburbs check. \n  Which suburb do you live in?"
suburb = gets.chomp
suburb = suburb.downcase

case suburb
    when "barton" then puts "Wow #{suburb}, you must be rich."
    when "kingston" then puts "Lots of good food there."     
    when "braddon" then puts "Ah, #{suburb}. Good coffee scene."
    else
        puts "#{suburb}, huh? Sounds nice."
    
end
