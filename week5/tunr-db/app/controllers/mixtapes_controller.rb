class MixtapesController < ApplicationController

  before_action :check_if_logged_in, except: [:index, :show]  #users can still see these two
  
  def new
    @mixtape = Mixtape.new
  end

  def create
    #We have to use the @current_user to associate with a user (NOT IN THE FORM)

    #Do not send user_id through a form as it can be chaged with the dev tools

    #this assumes that the current actions is locked down by check_if_logged_in

    # @mixtape = Mixtape.create mixtape_params

    #Here are some ways to avoid passing uder_id through params

    #Option 1 : using <<
    #@current_user.mixtapes << @mixtape

    #Option 2: 
    # @mixtape.user_id = @current_user.id
    # @mixtape.save

    #option 3
    #Use .new instead of .create, plus '=' and save  

    @mixtape = Mixtape.new mixtape_params
    @mixtape.user_id = @current_user.id
    @mixtape.save #This then becomes the actual create line

    if @mixtape.persisted? #does thius now have an id
        redirect_to mixtapes_path
    else
      render :new

    end


    

  end

  def index
    @mixtapes = Mixtape.all
  end

  def show
    @mixtape = Mixtape.find params[:id]
  end

  def edit
    @mixtape = Mixtape.find params[:id]
    
    
    #This might work if a method was created in the model
    # if current_user.owns( @mixtape )

    #Don't even show the edit page if the page dow not belong to the user


    if @mixtape.user.id != @current_user.id
      redirect_to login_path
    end
  end

  def update

    @mixtape = Mixtape.find params[:id]
    
    # Check again that this mixtape belongs to the logged in user, since people can still work out the edit url
    if @mixtape.user.id != @current_user.id
      redirect_to login_path
      #also need to stop the code, otherwise the rest of the code will run and the other redirect will thro an error
      return # so we add this return

      
    end



    if @mixtape.update mixtape_params

      redirect_to mixtape_path(@mixtape)
      #You can also just type 'redirect_to @mixtape'

    else
      render :edit

    end  #end if
  end #end update

  def destroy
    
    Link.destroy params[:id]
    redirect_to links_path
  end

  private

  def  mixtape_params

    params.require(:mixtape).permit(:name, :image )

  end



end #end Controller
