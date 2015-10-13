module Api::ReviewsHelper
  def review_params
    params.require(:review).permit(:rating, :description, :bench_id)
  end
end
