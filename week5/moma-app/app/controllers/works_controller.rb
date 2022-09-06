class WorksController < ApplicationController
  #Create
  # 1. Create new form
  
  def new
      @work = Work.new
  end

  # 2. Add entry and redirect
  def create
    Work.create work_params
    redirect_to works_path
  end

  # Read

  # 1. Show a list of all
  def index
    @works = Work.all
  end

  # 2. Show one
  def show
    @work = Work.find params[:id]
  end

  # Update

  # 1. Show prefilled in form
  def edit
    @work = Work.find params[:id]
  end

  # 2. Updtate and redirect
  def update

    work = Work.find params[:id]
    work.update work_params

    redirect_to works_path

  end

  # Destroy
  def destroy
    Work.destroy params[:id]

    redirect_to works_path

  end

  private ####i.e. not available outside this class. In this case, not a route handler. They are not callable from outside the class.

  #what private means in Rails is that it is not a handler for a route, just a toolkit function to be used by the actions.
  #you can private def method, or everythong after the keyword private will remain private

  def work_params #this will whitelist the params 

    #GOTCHA: Any new table columns would need to be named here.
    params.require(:work).permit(:title, :year, :style, :medium, :image, :artist_id)

  end #end artist_param



end
