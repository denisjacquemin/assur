class Contract < ActiveRecord::Base
  belongs_to :brand
  belongs_to :folder
end
