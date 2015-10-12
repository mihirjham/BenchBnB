class Api::BenchesController < ApplicationController
  include Api::BenchesHelper

  def index
    @benches = Bench.in_bounds(params[:filters])
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if(@bench.save)
      render :index
    else
      render json: {errors: @bench.errors.full_messages, status: 422}
    end
  end
end
