class Location < ActiveRecord::Base
	# attr_accessible :address, :latitude, :longitude
	geocoded_by :address
<<<<<<< HEAD
  	after_validation :geocode, :if => :address_changed?
  	# mount_uploader :image, ImageUploader
=======
	after_validation :geocode, :reverse_geocode#, :if => :address_changed?
>>>>>>> 913ba69ae530a5f999b27564c381e96000ed95f7
end
