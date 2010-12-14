class Brand < ActiveRecord::Base
  belongs_to :category
  belongs_to :company
  
  has_many :folders, :through => :contracts
end
