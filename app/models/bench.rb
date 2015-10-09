# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lon         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :lon, presence: true
  def self.in_bounds(bounds)
    benches = Bench.where("lat < ? AND lon < ? AND lat > ? and lon > ?",
                        bounds["northeast"]["lat"].to_f, bounds["northeast"]["lng"].to_f,
                        bounds["southwest"]["lat"].to_f, bounds["southwest"]["lng"].to_f);

    benches
  end
end
