class PagesController < ApplicationController
  #before actually running the 'home' 
  before_action :fetch_user, except: [:faq]  #the excetp here is an exmplae of how you could avoid this for a certain page. You also don't need this as it is declared in the ApplicaitonController #scoped to this current controller

  def home
  end #end home

  
end
