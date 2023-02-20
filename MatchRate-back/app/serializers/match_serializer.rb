class MatchSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :c1alpha2, :c2alpha2, :slug, :avg_score
  
    has_many :reviews
end