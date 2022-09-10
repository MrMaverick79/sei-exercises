
# def fib_rec n
    
#     #define our base case
#     if n < 2 
#         #the first two number in the sequence 
#         return 1
#     else
#         return fib_rec(n-1) + fib_rec(n -2)
        
    
#     end #end if
    
# end

# puts fib_rec(ARGV.first.to_i)

# #here we can store the previous results
# # the keys here will be n and the value will be the result of the function
@memo = {}



#memoised version
def fib_rec_memo n
    
    #define our base case
    if n < 2 
        #the first two number in the sequence 
        return 1
    else
        
    
        if @memo[:"#{n}"]
            return @memo[:"#{n}"]
        else
        
            @memo[:"#{n}"] = fib_rec_memo(n-1) + fib_rec_memo(n -2)
        end
        
    
    end #end if
    
end

puts fib_rec_memo(ARGV.first.to_i)
puts(@memo)