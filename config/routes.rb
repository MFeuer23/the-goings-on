Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/events/:category/:status', to: 'events#events'

  resources :favorites, only: [:index, :create, :destroy]
end
