class CreateContacts < ActiveRecord::Migration
  def self.up
    create_table :contacts do |t|
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
    drop_table :contacts
  end
end
