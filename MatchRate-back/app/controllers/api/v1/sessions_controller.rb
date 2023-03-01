class Api::V1::SessionsController < ApplicationController

    def create
        debugger
        user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id
        else
            render json: {error: 'Invalid email or password'}, status: 422
        end
    end

    def destroy
        session[:user_id] = nil
    end
end