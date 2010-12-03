class CreateCustomers < ActiveRecord::Migration
  def self.up
    create_table :customers do |t|
      t.string :firstname
      t.string :lastname
      t.integer :address_id
      t.date :birthdate
      t.string :email
      t.integer :contact_id
      t.text :comment
      t.string :idnum
      t.integer :sex_id
      t.integer :nationality_id
      t.integer :civilstatus_id
      t.integer :language_id
      t.string :jobdescription
      t.string :reference
      t.integer :title_id
      t.string :primary_email
      t.string :secondary_email
      t.string :private_phone
      t.string :office_phone
      t.string :cellphone
      t.string :fax

      t.timestamps
    end
  end

  def self.down
    drop_table :customers
  end
end
