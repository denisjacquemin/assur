class Language < ActiveRecord::Base
  has_many :customers
  has_many :users
end
