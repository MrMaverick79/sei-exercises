class ApplicationController < ActionController::Base
    
    before_action :fetch_user
    #because this before action is setup in the parent class this method will be run auto in all of the controllers Yuo can also use [only:] to express whatr pages get this.

    def fetch_user
  
    
      #check if the user is logged in
      if session[:user_id].present?
        @current_user = User.find_by id: session[:user_id]
  #we use find_by here as it returns nil if not found, as opposed to find which will throw an error.
      end #login check
  
      unless @current_user.present? ##e.g. after reseeding to avoid invalid id. This is most likely during development, but might happen if someon who was logged in deletes their acccount. 
        session[:user_id] = nil
  
      end  #end nil check
        
      # or:
      #session[:user_id] = nil unless @current_user.present?
  
  
      
  
    end #end fetch user

    #run this before any pages that reuyire the user to be logged in

    def check_if_logged_in
        #if the current request is coming from a user who is not logged in, redirect them to a login page

        #Any controller action that should only be availabel to logged in users can specify this method at the top of the controller as a before_action to prtect access
        unless @current_user.present?
            flash[:error] = 'Please log in to see that page'
            #@current user is defined above
            redirect_to login_path
        end#unless
  
    end #end check_if_logged_in

end #end class ApplicationController
