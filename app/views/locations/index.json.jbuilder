json.array!(@locations) do |location|
  json.extract! location, :id, :address, :latitude, :longitude, :image, :description
  json.url location_url(location, format: :json)
end



