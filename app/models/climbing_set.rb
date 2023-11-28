class ClimbingSet < ApplicationRecord
    has_many :climbs
    has_one_attached :image


    validates :set_name, presence: true
    validates :week, presence: true
    validates :date_start, presence: true
    validates :date_end, presence: true
    # validate :image_presence

    def formatted_start_date
        self.date_start.strftime('%B %d, %Y')
    end
    
    def formatted_end_date
        self.date_end.strftime('%B %d, %Y')
    end

    ## disabled for seed data generation

    # def image_presence
    #     unless image.attached?
    #       errors.add(:image, "must be attached")
    #     end
    # end

    def slugify
        self.set_name.parameterize
    end

end
