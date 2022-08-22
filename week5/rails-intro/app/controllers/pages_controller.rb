class PagesController < ApplicationController

    def say_hi
        puts "Say hi was called" #should appear in the terminal
        # render plain: "hi"  removes template and loads plain
    end


    def haha
        @page_title = 'Get ready to laugh'
        #nothing seems to needed in here
    end

    def greet
        @number = rand 100
        @name = params[:person].capitalize
    end

end #end of class Pagescontroller