#module Api
#    module V1
class Api::V1::ReviewsController < ApplicationController
#class ReviewsController < ApplicationController

    def create
        review = review.new(review_params)

        if review.save
            render json: ReviewSerializer.new(review).serialized_json
        else
            render json: {error: review.errors.messages  }, status: 422
    end

    def destroy
        review = review.find(params[:id])

        if review.destroy
            head :no_content
        else
            render json: {error: review.errors.messages  }, status: 422
    end

    private
    
    def review_params
        params.require(:review).permit(:title, :description, :score, :match_id)

    end
end