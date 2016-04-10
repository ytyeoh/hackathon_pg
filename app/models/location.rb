class Location < ActiveRecord::Base
	# attr_accessible :address, :latitude, :longitude
	geocoded_by :address
	after_validation :geocode, :reverse_geocode#, :if => :address_changed?
end
