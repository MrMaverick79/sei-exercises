# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.

#     If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
#     If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."
def temp_control
    print "Welcome to the temperature control system.\n Is the A/C working? [y/n]"
    functional =  gets.chomp.downcase

    if functional[0] == 'y' 
        working = true 
    elsif functional[0] == 'n'  
        working = false
    else
        puts "Please enter a valid response."
        temp_control
    end

current_temp = current_temp_check #checks what the current temp is and ensures it returns a valid number
desired_temp = desired_temp_check #checks the desired temp and ensures it returns a valid number
    
    if working
        current_temp > desired_temp
            puts "Please turn the A/C on."
    else 
         if current_temp > desired_temp
            puts "Fix the A/C now."
        else 
            puts "Fix the A/C whenever you can, its cool."
        end
    end

end #end of temp_control

def current_temp_check
    print "What is the current temperature? (0-60.0)"
    current_temp = gets.chomp
    current_temp = current_temp.to_f
    if current_temp > -50.0 && current_temp < 60.0
        return current_temp
    else
        puts "Please enter a valid temp"
        current_temp_check
    end
end

def desired_temp_check
    print "What temperature would you like it to be? (0-30.0)"
    desired_temp = gets.chomp
    desired_temp = desired_temp.to_f
    if desired_temp > -50.0 && desired_temp < 60.0
        return desired_temp
    else
        puts "Please enter a valid temp"
        desired_temp_check
    end
end

temp_control

