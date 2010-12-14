class Folder < ActiveRecord::Base
  belongs_to :customer
  accepts_nested_attributes_for :customer
  
  has_many :brands, :through => :contracts
end
