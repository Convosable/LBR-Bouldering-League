Rails.application.routes.draw do

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  resources :user_climbs
  resources :climbs
  resources :climbing_sets
  resources :teams
    
  resources :users do
    member do
      patch 'join_team'
      patch 'leave_team'
    end
  end

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
