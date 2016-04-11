# config/initializers/geocoder.rb
Geocoder.configure(
  # geocoding service
  lookup: :google,

  # geocoding service request timeout (in seconds)
  timeout: 3,

  # default units
  units: :km,


  # to use an API key:
  :api_key => "AIzaSyDrC_FHH3xSb6xTse55j_sRt48lN2IRMxk",
)