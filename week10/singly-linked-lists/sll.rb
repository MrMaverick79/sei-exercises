
# Thought experiment: what if there were no arrays in a language

#  What if you couldn't chage the numnber of items in an array? 
# That is, what if you didn't have dynamic memory allocation

# JS & Ruby are high-level' interpreted languages, they provide a relatively abstracted/ managed access to computer memory

# In contrast, C is  alow-level compiled langage which required
# the programer to manage memory allocationa manually
#   e.g. int ages[10]

# for containing data

def r  #for debugging in pry
    puts "Reloading..."
    load './sll.rb'
end

class SLL

    attr_accessor :head #this is where you will start

    
    
    def initialize( val )
        # create an instance of the Node class,
        # and give it the 'val' argument as its
        # datal then store this new first node in
        # the @head attribute
        @head = Node.new val

    end

    #Create a new node, set the 'val' arg as its data, and 
    #'splice' it into the list after the given 'node',
    # and don't forget tp add the rest of the list
    # onto then end of the new node
    def insert_after( node, val )

        new_node =  Node.new val

        #we have to replce the nex first, so we dont'; break the chain
        new_node.next  = node.next

        node.next = new_node
        

    end

    #TODO as HW: implement these methods:

    def length
        @length = 0
        #return the length
        # This will involve interation.
        #Bonus: make an instance variable that keeps track of it for you
        # Don't forget to keep it up to date
        current_node = @head
        
        while current_node != nil
            current_node = current_node.next
            @length += 1
        end

        @length
    end


    def at_index( n )
        ##Array like access to the node at positon n, 
        #starting at zero return whole node.
        # def []( n)
        if n > self.length || n < 0
           return 'Outside range'
        end

        position = 0
        current_node = @head
        until position == n 
            current_node = current_node.next
            position += 1
        end

        current_node

    end


    def reverse!
        
        # returns a destructive reverse, ie. changes 'self'
        
        n = self.length - 1
        
        current_node = self.at_index n       
        @list = current_node
        # make the new node next nil??
        n -= 1
        while n >= 0
            new_node = self.at_index n
            new_node.next = nil
            current_node.next = new_node
            current_node = new_node
            n -=1

        end

        @list
    end

    def reverse
        #Returns a non-destructive reversed version of the list
        list_copy = @head
        
        #you can't access methods on a copy of @head

        

    end

    def shift
        # remove the first node from the list
        # return the node
        old_head = @head

        @head = old_head.next
        old_head.next= nil #remove this if returning the node includes the original nexts
        
        old_head
        

    end

    def delete (node_to_delete )

        # find the node
        deleting = self.find node_to_delete
        
        #find the node before
        if deleting == @head

            @head = deleting.next
            deleting.next = nil
            return deleting
            
       else
            #we need to find the node before, so we can then make its next deleting.next
            current_node = @head
            
            # iteratue through the nodes to find the one before the one we wish to delete
            while current_node != nil
                if current_node.next != deleting
                    current_node = current_node.next 
                else  
                    #once we have found the node before, 
                    #we change its next to the next of the one we are deleting 
                    current_node.next = deleting.next
                    deleting. next =  nil
                    return deleting

                end
            end
            

        
       end



    end


    def delete_at (n)
        #delete at a certain position
        # don't break the chain!
        node_to_delete = self.at_index n
        node_before = self.at_index n - 1
        node_before.next = node_to_delete.next
        node_to_delete.next = nil
        node_to_delete

    end


    #implement the each method: your version of .each
    # must accept a block, and run that block for every
    # item in the list, giving the current item to the block
    #as a a block

    #look into "yield" and "block_given"
    #once you define each, the rest follows.
    def each (&block)
        #While loop, plus yield
        #This allows other part
       
        i = 0
        while i < self.length
            
            if block_given? 
                yield self.at_index i
                
            end
            i += 1
            #this allows us to run a block if provided

           
        end
    end

    def map(*args)
        # expects a block and runs a block for each 
        # node in the list, but returns an array of those values
        # as transformed
        newArray = []
        
        self.each { |i| newArray.push(i)}
           
            
       

        newArray


    end

    def prepend (val )
        #This method will create a new node, assign val as its data
        # and make 
        new_node = Node.new val

        # since we are prepending , the original start of the list
        # is the new start for the rest ot the list

        new_node.next = @head
        @head = new_node #then the head becomes this new_node
    end

    def append (val )
        # TODO: add a @tail or @endinstance variable that
        # always keeps track of the end of the list, saving us from
        # having to iterate over the whole list at O(n)

        new_node = Node.new val

        current_node = @head

        while current_node.next != nil
            current_node = current_node.next

        end #while

        #current node is then returned as it is the last node
        current_node.next = new_node

    end

    # we can override the existing to_s , os thta it will be used
    # by puts, print and string interpolation
    def to_s 
        output  = ""

        current_node = @head

        while current_node != nil
            output += current_node.data + ', '
            current_node = current_node.next
        end

        output # returns a list of the names in the list

    end

    # find (and return) the entire Nodse whose 'data' is the specified argument
    def find( needle )
        current_node = @head
        
        while current_node != nil
            if current_node.data == needle
                return current_node #an early return that returns 
            end
            current_node = current_node.next
        end


    end

    class Node
        #TODO: research 'Struct' that lets you create
        # A data container class in a single line:
        # Node = Struct.new( :data, :next)  <--shorthand version of this class.
    
        attr_accessor  :data, :next
    
        def initialize ( val)
            @data = val
        end
    
    
    
    end

end   

# Will not posess methods, more for storing a few pieces of data

list = SLL.new 'Rick'
list.append 'Morty'
list.append 'Jessica'
list.prepend 'Jerry'
 
require 'pry'
binding.pry; #pause here 