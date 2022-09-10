

def count n =10

    while n  > -1;
       puts n
       n = n -1
       sleep 0.3 #for drama
       
    end


    #Now with recursion. To support recursion,, the language nbeeds to have vbariable, functions, anbd conditionals.

    puts n
   


    puts 'Go go go!'
end # end countdown

# count

def count_rec ( n = 10 )

    #define a base case: a condition under which the function stops recursion
    #Otherwise, you will blow the stack.
    #Each language has a max stack size
    if n < 0
       p "Blast Off"
    else 
        p n 
        sleep 0.3
        count_rec n - 1
        # this line is not reached until the functions are over
        puts "Returned (n = #{ n })"
    end # end if


end

count_rec