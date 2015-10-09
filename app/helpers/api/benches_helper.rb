module Api::BenchesHelper
  def bench_params
    params.require(:bench).permit(:description, :lat, :lon, :seating)
  end
end
