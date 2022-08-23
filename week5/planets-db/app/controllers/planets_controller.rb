class PlanetsController < ApplicationController
    
    def home

    end #end home
    
    #Create
    #1. blank form
    def new
        @planet = Planet.new
        
    end

    #2. Post new , form submit, redirect
    def create
        #raise "hell" #debugging

        #Beacuse of the 'form_with' helper created form input names like name ="planet[moons]" and name="planer[image_rl]", the form data we get in params is more nested. Therefore we need to write params[:planet][:moons] etc

        #TODO: make sure the planet was actully creewtaed and validate --later in the week

        Planet.create(
            name:       params[:planet][:name],
            mass:       params[:planet][:mass],
            orbit:      params[:planet][:orbit],
            moons:      params[:planet][:moons],
            image_url:  params[:planet][:image_url]

        )

        #'create' should redirect, rather than show its own page, to prevent duplication 

        redirect_to planets_path

    end


    #REAd
    #1. Index of all planets
    def index
        @planets = Planet.all
    end #end index

    #2. Show a page for a planet
    def show
        @planet = Planet.find params[:id]
    end #end show



    #Update

    #1. Show a prefilled form
    def edit
        @planet = Planet.find params[:id]
    end


    #2. Update an existing entry, and redirect
    def update
       
            #raise "hell" #debugging
    
            #Beacuse of the 'form_with' helper created form input names like name ="planet[moons]" and name="planer[image_rl]", the form data we get in params is more nested. Therefore we need to write params[:planet][:moons] etc

            ###Make surE YOU GET THE PLANET FIRST###
            planet = Planet.find params[:id]

            planet.update(
                name:       params[:planet][:name],
                mass:       params[:planet][:mass],
                orbit:      params[:planet][:orbit],
                moons:      params[:planet][:moons],
                image_url:  params[:planet][:image_url]
    
            )
    
            #'Editshould redirect, rather than show its own page, to prevent duplication 
    
            redirect_to planet_path(planet.id)
    
        
    end

    #delete
    def destroy
        Planet.destroy params[:id] #TODO: Validate that the destroy worked

        redirect_to planets_path

    end #end delete

end #class PlanetsController
