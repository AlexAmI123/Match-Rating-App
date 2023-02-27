class Api::V1::SessionsController < ApplicationController
    # def new
    # end

    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
        else
            render json: {error: 'Invalid email or password'}, status: 422
        end
    end

    def destroy
        session[:user_id] = nil
    end
end