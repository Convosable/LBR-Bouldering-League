Rails.application.routes.draw do

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  resources :user_climbs

  resources :teams

  resources :climbing_sets do
      resources :climbs
  end
    
  resources :users do
    member do
      patch 'join_team'
      patch 'leave_team'
      patch 'update_climbs'
    end
  end

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
