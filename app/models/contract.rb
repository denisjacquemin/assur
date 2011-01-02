class Contract < ActiveRecord::Base
  belongs_to :brand
  belongs_to :folder
  
  delegate :name, :to => :brand, :prefix => true, :allow_nil => true
end
