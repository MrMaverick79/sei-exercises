require 'sinatra'
require 'sinatra/reloader'

get '/' do
    erb :home
end

get '/about' do
    erb :calc_about
end

get '/calc/:num1/:operator/:num2' do
    @num1 = params[:num1].to_i
    @operator = params[:operator]
    @num2 = params[:num2].to_i

    if @operator == 'plus'
        @result = @num1 + @num2
    elsif @operator  == 'times'
        @result = @num1 * @num2
    elsif @operator == 'divide'
        @result = @num1.to_f / @num2.to_f
    elsif @operator == 'subtract'
        @result = @num1 - @num2
    end
    erb :calc
end