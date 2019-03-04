class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.string :category
      t.boolean :ongoing
      t.string :article_url
      t.timestamps
    end
  end
end
