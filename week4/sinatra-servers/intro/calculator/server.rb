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

    @result  = case @operator
    when 'plus' then @num1 + @num2
    when 'times' then @num1 * @num2
    when'divide' then @num1.to_f / @num2.to_f
    when 'subtract' then   @num1 - @num2
    end
    erb :calc
end

#this is the route which the calculator oin the /about route actually submits to

get '/calc/answer' do
    @num1 = params[:first_num].to_i
    @operator = params[:operator]
    @num2 = params[:second_num].to_i

    @result  = case @operator
    when '+' then @num1 + @num2
    when '*' then @num1 * @num2
    when'/' then @num1.to_f / @num2.to_f
    when '-' then   @num1 - @num2
    end
    erb :calc_form_answer
end
