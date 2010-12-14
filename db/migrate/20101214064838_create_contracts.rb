class CreateContracts < ActiveRecord::Migration
  def self.up
    create_table :contracts do |t|
      t.integer :brand_id
      t.integer :folder_id

      t.timestamps
    end
  end

  def self.down
    drop_table :contracts
  end
end
