class Entry < ActiveRecord::Base
  validates :title, :body, :presence => true

  belongs_to :user

  extend FriendlyId
  friendly_id :title, :use => :slugged
end
