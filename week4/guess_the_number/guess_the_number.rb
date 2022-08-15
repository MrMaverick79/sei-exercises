# Activity:

#     You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.

# Specification:

#     The user should be asked to guess a number
#     If the user's guess is correct, the user should see a congratulatory message
#     If the user's guess is not correct, the user should be asked to guess the number again.

# Extensions:

#     Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
#     Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"




def playGame
    target_number = rand (10000)
    p target_number
    print "I have chosen a number between 0 and 10000. See if you can guess it in less than 20 turns.\n What is your first guess?"
    number_of_guesses = 1
    guess = gets.to_i
    
    until guess == target_number
        19.downto(0) do |i|
        
            if guess > target_number
                number_of_guesses += 1
                print "Wrong guesss, lower! You have #{i} guesses left."
                guess = gets.to_i
            elsif guess < target_number
                number_of_guesses += 1
                print "Wrong guess, higher! You have #{i} guesses left."
                guess = gets.to_i
            else
                break
            end
        
            
        end
        if guess != target_number         
            puts "No more guesses!"
            break
        end
        

    end
    if guess == target_number
        number_of_guesses += 1
        print "Correct, the number was #{target_number} \n You took #{number_of_guesses} guesses."
    end

end #end playgame


playGame