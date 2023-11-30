class User < ApplicationRecord
    belongs_to :team, optional: true
    has_many :user_climbs
    has_many :climbs, through: :user_climbs
    has_one_attached :image

    has_secure_password

    attribute :points, :integer

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :handicap, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 10  }

    validate :username_one_word

    def full_name
        "#{first_name} #{last_name}"
    end

    def username_one_word
        unless username =~ /\A\w+([-_.]\w+)*\z/
          errors.add(:username, 'must be one word with optional underscores, dashes, or periods')
        end
    end

    def update_points
        updated_points = climbs.map { |climb| climb.calculate_points(self) }
        self.points = updated_points.sum
        save
    end

    def ordered_climbs_by_grade
        self.climbs.order("climbs.grade DESC")
    end

end
