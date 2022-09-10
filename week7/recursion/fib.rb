#iterative Fibonacci sequence
#compare with the re curse version in fib_rec.rb

def fib( n )
    
    #n is the nth position in the sequence

    #values 1 1 (n-2 + n-1) ...
    a = 1 
    b = 1
    n.times do
        temp = a
        a = b
        b = a + temp
    end
    a
end

 # ARGVspecial variable when you run it in the command line, you can add whatever arguments you like. ARGV creates strings

puts fib( ARGV.first.to_i )