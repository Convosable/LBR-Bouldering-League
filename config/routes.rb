Rails.application.routes.draw do
  resources :climbing_sets
  resources :users
  resources :teams
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
