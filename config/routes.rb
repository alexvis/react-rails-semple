Rails.application.routes.draw do
  root 'cereals#index'

  resources :cereals

  namespace :api do
    namespace :v1 do
      resources :cereals, only: [:index, :show]
    end
  end
end
