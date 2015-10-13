# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  rating      :integer          not null
#  description :text             not null
#  bench_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ActiveRecord::Base
  validates :rating, :description, :bench_id, presence: true

  belongs_to :bench,
    class_name: "Bench",
    foreign_key: :bench_id,
    primary_key: :id
end
