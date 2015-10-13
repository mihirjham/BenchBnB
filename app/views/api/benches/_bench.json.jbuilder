json.extract! bench, :id, :description, :lat, :lon, :created_at, :updated_at, :seating
sum = 0;
json.reviews do
  json.array! bench.reviews do |review|
    json.partial! "api/reviews/review", review: review
    sum += review.rating
  end
end

json.average_rating sum.to_f/bench.reviews.length
