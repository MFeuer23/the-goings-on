class FavoritesController < ApplicationController


  def index
    render :json => Favorite.all
  end

  def create
    @favorite = Favorite.find_or_create_by(
      title: params["title"],
      description: params["description"],
      source_url: params["source_url"],
      category: params["category"]
    )
    render json: @favorite
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    render json: @favorite
  end


end
