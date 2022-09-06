class ArtistsController < ApplicationController
  
  #Create 

  #1. Form
  def new
    @artist = Artist.new #No id yet

  end

  # 2. Post and create
  def create

    ####New way-- uses the private function below #####
    Artist.create artist_params

    ####OLD WAY####
    # artist = params[:artist]

    # Artist.create(

    #   name: artist[:name],
    #   dob: artist[:dob],
    #   nationality: artist[:nationality],
    #   bio: artist[:bio],
    #   period: artist[:period],
    #   roundness: artist[:roundness],
    #   image: artist[:image]

    # )

    redirect_to artists_path #/return to artists page

  end


  #Read

  #1. Get all the artists
  def index

    @artists = Artist.all

  end

  #2. Show one artists
  def show
    @artist = Artist.find params[:id]

  end

  # Update

  # 1. Grab an artist by id
  def edit
    @artist = Artist.find params[:id]
  end

  # 2. Update and redirect
  def update
    artist = Artist.find params[:id]
    artist.update artist_params

    redirect_to artist_path(artist.id)

  end

  def destroy
    Artist.destroy params[:id]

    redirect_to artists_path
  end
   
  #######################################
  private ####i.e. not available outside this class. In this case, not a route handler. They are not callable from outside the class.

  #what private means in Rails is that it is not a handler for a route, just a toolkit function to be used by the actions.
  #you can private def method, or everythong after the keyword private will remain private

  def artist_params #this will whitelise the params that are allowed through

    #GOTCHA: Any new table columns would need to be named here.
    params.require(:artist).permit(:name, :nationality, :dob, :period, :roundness, :bio, :image)

  end #end artist_params


end #end calss ArtistController
