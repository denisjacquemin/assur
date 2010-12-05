class CreateCompanies < ActiveRecord::Migration
  def self.up
    create_table :companies do |t|
      t.string :name
      t.integer :address_id
      t.text :comment

      t.timestamps
    end
  end

  def self.down
    drop_table :companies
  end
end
