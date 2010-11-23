class Address < ActiveRecord::Base
  has_many :customers
end
