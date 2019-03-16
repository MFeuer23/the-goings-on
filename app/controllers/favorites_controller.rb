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
  end


end
