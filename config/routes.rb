# frozen_string_literal: true

Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  get '/healthcheck', to: 'healthcheck#index'
  post '/api/v1/register', to: 'registration#create'
  patch '/api/v1/register', to: 'registration#update'
  delete '/api/v1/register', to: 'registration#delete'
  get '/api/v1/registrations', to: 'registration#list'
  get '/metrics', to: 'metrics#index'
end
