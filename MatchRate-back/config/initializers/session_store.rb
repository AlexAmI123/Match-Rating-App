if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_MatchRate', domain: 'MatchRate-back'
  else
    Rails.application.config.session_store :cookie_store, key: '_MatchRate'
  end
