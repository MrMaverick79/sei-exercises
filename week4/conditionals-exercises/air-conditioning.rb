# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.

#     If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
#     If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."
def temp_control
    puts "Welcome to the temperature control system.\n Is the A/C working? [y/n]"
    functional =  gets.chomp
    functional.downcase
    
    if functional == 'y' || functional == 'yes' || functional == 'n' || functional == 'no' 
        puts "What is the current temperature?"
        current_temp = gets.chomp
        current_temp = current_temp.to_f
        working = true
        
        puts "What temperature would you like it to be? (0-30.0)"
        desired_temp = gets.chomp
        desired_temp = desired_temp.to_f
        
    else
        puts "Please enter a valid response."
        temp_control
    end
    
    if working && current_temp > desired_temp
        puts "Please turn the A/C on."
    
    elsif !working && current_temp > desired_temp
        puts "Fix the A/C now."
    
    else 
        puts "Fix the A/C whenever you can, its cool."
    end

end

temp_control

