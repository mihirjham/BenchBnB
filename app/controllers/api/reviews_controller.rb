class Api::ReviewsController < ApplicationController
  include Api::ReviewsHelper

  def create
    @review = Review.new(review_params)

    if @review.save
      @bench = @review.bench
      render :show
    else
      render json: {errors: @review.errors.full_messages}, status: 422
    end
  end
end
