# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |_repo| 'https://github.com/thewca/wca-registration.git' }

ruby '3.2.2'

# Gems that are only needed by the handler not the worker
# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem 'rails', '~> 7.0.4', '>= 7.0.4.3'

# Use sqlite3 as the database for Active Record
gem 'sqlite3', '~> 1.4'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '~> 5.0'

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem 'jbuilder'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

# much better gem for http requests than the native ruby one
gem 'httparty'

# jwt decoding
gem 'jwt'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

# Use Redis adapter to run Action Cable in production
gem 'hiredis'
gem 'redis', '~> 4.0'
# So Redis can share connections
gem 'connection_pool'

# DynamoDB for storing registrations
gem 'aws-sdk-dynamodb'
gem 'dynamoid', '3.8.0'

# SQS for adding data into a queue
gem 'aws-sdk-sqs'

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
gem 'kredis'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# Exposes Metrics
gem 'prometheus_exporter'

# vault for secrets management
gem 'vault-rails'

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[mri mingw x64_mingw]

  # rspec-rails for creating tests
  gem 'rspec-rails'

  # Use rswag for creating rspec tests that also produce swagger spec files
  gem 'rswag'

  # Use pry for live debugging
  gem 'pry'

  # webmock for mocking responses from other microservices
  gem 'webmock', require: false

  gem 'rubocop', require: false
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
  gem "ruby-prof"
end
