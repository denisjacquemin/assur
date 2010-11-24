class Nationality < ActiveRecord::Base
  has_many :customers
end
