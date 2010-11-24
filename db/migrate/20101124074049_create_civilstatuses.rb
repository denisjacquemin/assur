class CreateCivilstatuses < ActiveRecord::Migration
  def self.up
    create_table :civilstatuses do |t|
      t.string :name

      t.timestamps
    end
  end

  def self.down
    drop_table :civilstatuses
  end
end
