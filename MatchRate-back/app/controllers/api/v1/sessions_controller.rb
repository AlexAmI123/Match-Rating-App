class Api::V1::SessionsController < ApplicationController

    def create
        @user = User.find_by(username: session_params[:user][:username])
      
        if @user && @user.authenticate(session_params[:user][:password])
          login!
          render json: {
            logged_in: true,
            user: @user
          }
        else
          render json: { 
            status: 401,
            errors: ['no such user, please try again']
          }
        end
    end
    def is_logged_in?
        if logged_in? && current_user
          render json: {
            logged_in: true,
            user: current_user
          }
        else
          render json: {
            logged_in: false,
            message: 'no such user'
          }
        end
    end
    def destroy
          logout!
          render json: {
            status: 200,
            logged_out: true
          }
    end
    private
    def session_params
          params.require(:user).permit(:username, :password)
    end

    # def create
    #     # debugger
    #     user = User.find_by(email: params[:user][:email])
    #     if user && user.authenticate(params[:user][:password])
    #         session[:user_id] = user.id
    #     else
    #         render json: {error: 'Invalid email or password'}, status: 422
    #     end
    # end

    # def destroy
    #     session[:user_id] = nil
    # end
end