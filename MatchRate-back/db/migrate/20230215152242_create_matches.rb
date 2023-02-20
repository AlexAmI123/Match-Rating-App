class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|
      t.string :name
      t.string :image_url1
      t.string :image_url2
      t.string :slug

      t.timestamps
    end
  end
end
