#module Api
#  module V1
class Api::V1::MatchesController < ApplicationController
#class MatchesController < ApplicationController

  before_action :set_post, only: %i[ show update destroy ]
  def index
    matches = Match.all

    render json: MatchSerializer.new(matches, options).serialized_json
  end

  def show
    match = Match.find_by(slug: params[:slug])

    render json: MatchSerializer.new(match, options).serialized_json
  end

  def create
    match = Match.new(match_params)

    if match.save
        render json: MatchSerializer.new(match).serialized_json
    else
        render json: {error: match.errors.messages}, status: 422
    end
  end

  def update
    match = Match.find_by(slug: params[:slug])

    if match.update(match_params)
        render json: MatchSerializer.new(match).serialized_json
    else
        render json: {error: match.errors.messages}, status: 422
    end
  end

  def destroy
    match = Match.find_by(slug: params[:slug])

    if match.destroy
        head :no_content
    else
        render json: {error: match.errors.messages}, status: 422
    end
  end

  private
  def match_params
    params.require(:match).permit(:name, :image_url1, :image_url2)
  end

  def options
    @options ||= { include: %i{reviews}}
  end
end