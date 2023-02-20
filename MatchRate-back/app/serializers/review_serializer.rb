class ReviewSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :description, :score, :match_id
end
  