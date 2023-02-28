class Api::V1::ReviewsController < ApplicationController
    
    def create
        review = match.reviews.new(review_params)

        if review.save
            render json: ReviewSerializer.new(review).serialized_json
        else
            render json: {error: review.errors.messages  }, status: 422
        end
    end

    def destroy
        review = review.find(params[:id])

        if review.destroy
            head :no_content
        else
            render json: {error: review.errors.messages  }, status: 422
        end
    end

    private
    
    def match
        @match ||=Match.find(params[:match_id])
    end

    def review_params
        params.require(:review).permit(:title, :description, :score, :match_id)

    end
end