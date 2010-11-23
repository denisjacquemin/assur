class Address < ActiveRecord::Base
  has_many :customers
  belongs_to :country
end
