class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.title :string
      t.category :string
      t.ongoing :boolean
      t.article_url :string
      t.timestamps
    end
  end
end
