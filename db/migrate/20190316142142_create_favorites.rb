class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.string :title
      t.string :description
      t.string :category
      t.string :source_url
    end
  end
end
