class Api::V1::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            login!
            render json: UserSerializer.new(user).serialized_json
        else
            render json: {error: user.errors.messages}, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email,:password)
    end
end