require 'pry'

#exploring classes in Ruby



class Person 
    
    attr_accessor :name, :age  #this is a short cut for getters and setters. Note that there is also:

    # attr_reader : With attr_reader you can only read the value, but not change it. 

    # attr_writer : With attr_writer you can only change a value but not read it

    #constructor. This ensures the aprameters are associated with the object
    def initialize name, age
        puts('Initialize was called')
        puts ('A new person was born!')
        @name = name
        @age = age
    end

    

    def say_hello
        puts("Hello I am called #{@name}.")
       
    end
    
end #end class person

#Comedian inherets from person
class Comedian  < Person 

    #Here is a class method, in distinction from all out other methods like say_hello, which are instance methods.

    #That is, this can be called on the class itself, rather than an instance of it. 
    def self.describe_it 
        puts "This is a class for creating comedians."
    end 
    
    def tell_joke
        
        puts "What's brown and looks in your window at night?"
            5.times do 
                print '.'
                sleep 0.2
            end
        puts '......poo on stilts!'

    end #end tell_joke

    #override the behaviour inhereted from the parent

    #we wan to be able to use the original version and the additions
    def say_hello
        
        super  #this key word runs the version in the parent class. 

    
       
        puts ("Please watch my Netfix special.")
    end #ends say_hello


end #end class Comedian


binding.pry #debugger