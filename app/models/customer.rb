class Customer < ActiveRecord::Base
  belongs_to :address
  belongs_to :sex
  belongs_to :contact
end
