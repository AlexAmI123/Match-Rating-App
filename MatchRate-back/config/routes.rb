Rails.application.routes.draw do
  root  "pages#index"

  namespace :api do
    namespace :v1 do
      resources :matches, param: :slug
      resources :reviews, only: [:create, :destroy]
      resources :users
      resources :sessions

      post '/login',    to: 'sessions#create'
      post '/logout',   to: 'sessions#destroy'
      get '/logged_in', to: 'sessions#is_logged_in?'

    end
  end

  get "*path", to: "pages#index", via: :all
end
