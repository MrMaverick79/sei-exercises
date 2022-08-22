class CalculatorController < ApplicationController

        def calculon
            @first = params[:first].to_i
            @second = params[:second].to_i
            @op = params[:op]

            @result = @first.send(@op, @second.to_f)
            #s5.send('+', 2 ) <-- says 'send' the number 5 the message '+'. Beacause + is a method in Ruby, this will still work



            #slow way:
            # @result = case @op
            # when '+'  then  @first + @second
            # when '-'  then  @first - @second
            # when '*'  then  @first * @second
            # when 'd'  then  @first.to_f / @second
            # else "ERROR"

            # end #end case

            
            

        end #end calculon


        def home

        end #end home



        #do not add routes past this point
end #end CalculatorController
