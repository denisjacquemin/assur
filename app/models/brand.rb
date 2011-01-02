class Brand < ActiveRecord::Base
  belongs_to :category
  belongs_to :company
  
  has_many :folders, :through => :contracts
  
  scope :filter_by_category, lambda { |category_id|
    where("category_id = ?", category_id)
  }
  
  delegate :name, :to => :category, :prefix => true, :allow_nil => true
  delegate :name, :to => :company, :prefix => true, :allow_nil => true
end
