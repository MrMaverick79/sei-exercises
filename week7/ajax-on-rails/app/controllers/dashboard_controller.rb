class DashboardController < ApplicationController
  
  def app
  end

  def uptime
    @uptime_output = `uptime`
    

    data = {
      command: 'uptime',
      output: @uptime_output,
      random_numbers: [123, 5, 6]
    }

    #The same controller action can respond in different ways
    # either HTML or JSON depending on the request format.
    # This is specified by the browser in the request header
    # The header is called Accept:
    # If Accept: application/json -- JSON for AJAX request
    # Accept: text/html -regular HTML page

    #To indicate which response to use:
    respond_to do |format|
        format.html # do nothing - ie. render the default
        format.json {
          render json: data
        }

    end #end do

  end #end 

  def hog
    @hog = `ps xr`.split("\n").second

    render json: {
      hog: @hog
    }
  
  end #end hog

end
