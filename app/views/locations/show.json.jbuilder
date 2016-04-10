json.extract! @location, :id, :address, :latitude, :longitude, :created_at, :updated_at


json.array!(@location.nearbys(10)) do |location|
  json.extract! location, :id, :address, :latitude, :longitude
  json.url location_url(location, format: :json)
end