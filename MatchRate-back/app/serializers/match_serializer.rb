class MatchSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :image_url1, :image_url2, :slug, :avg_score
  
    has_many :reviews
end