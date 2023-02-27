Rails.application.routes.draw do
  root  "pages#index"

  namespace :api do
    namespace :v1 do
      resources :matches, param: :slug
      resources :reviews, only: [:create, :destroy]
      resources :users
      resources :sessions

      
    end
  end

  get "*path", to: "pages#index", via: :all
end
