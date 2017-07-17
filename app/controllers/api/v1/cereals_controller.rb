class Api::V1::CerealsController < ApplicationController
  def index
    render json: Cereal.all
  end
  
  def show
    render json: Cereal.find(params[:id])
  end
end
