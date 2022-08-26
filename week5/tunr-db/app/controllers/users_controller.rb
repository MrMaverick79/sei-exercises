class UsersController < ApplicationController
  def new
    @user = User.new #for the 'form_with'
  end

  def create
    @user = User.create user_params

    if @user.persisted? #i.e. saved-- was an object created thaty was saved ot the datatbase. It might not have if there was a validation error.
      session[:user_id] = @user.id #log in
      redirect_to user_path(@user.id)

    else
      
      #instead we render the new template, i.e. the form , this timw with the errors that are contained within the @user object

      render :new #this does not run the new() tmpelkate above. Instead, it just shows the template.



    end #end if else


  end #end create 

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def user_params
    
    params.require(:user).permit(:name, :email, :password, :password_confirmation)

  end #end user_params


end
