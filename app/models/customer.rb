class Customer < ActiveRecord::Base
  belongs_to :address
  belongs_to :sex
  belongs_to :contact
  
  accepts_nested_attributes_for :address
end
