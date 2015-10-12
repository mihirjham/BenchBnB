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
#  seating     :integer          not null
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :lon, :seating, presence: true
  def self.in_bounds(filters)
    bounds = filters[:bounds];
    minSeating = filters[:minSeating]
    maxSeating = filters[:maxSeating]
    if(!minSeating || !maxSeating)
      benches = Bench.where("lat < ? AND lon < ? AND lat > ? and lon > ?",
                          bounds["northeast"]["lat"].to_f, bounds["northeast"]["lng"].to_f,
                          bounds["southwest"]["lat"].to_f, bounds["southwest"]["lng"].to_f);
    else
      benches = Bench.where("lat < ? AND lon < ? AND lat > ? and lon > ? AND seating BETWEEN ? AND ?",
                          bounds["northeast"]["lat"].to_f, bounds["northeast"]["lng"].to_f,
                          bounds["southwest"]["lat"].to_f, bounds["southwest"]["lng"].to_f, minSeating, maxSeating);
    end

    benches
  end
end
