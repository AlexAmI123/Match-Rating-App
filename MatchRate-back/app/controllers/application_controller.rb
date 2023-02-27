class ApplicationController < ActionController::Base
    # def index
    # end

    protect_from_forgery with: :null_session

    private

    def current_user
        if session[:user_id]
            current_user ||= User.find(session[:user_id])
        end
    end
    helper_method :current_user
end
