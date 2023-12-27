class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    before_action :check_team_member_limit, only: [:join_team]

    def show
      render json: @current_user, status: :ok
    end

    def create 
      user = User.new(user_params)

      if User.count.zero?
        user.admin = true
      else
        user.admin = false
      end
    
      if params[:image].present? && params[:image] != 'null'
        user.image.attach(params[:image])
      else
        default_image_path = Rails.root.join('app', 'assets', 'images', 'default_profile_pic.png')
        user.image.attach(File.open(default_image_path))
      end
      if user.save
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def update
      @current_user.update!(user_params)
      @current_user.update_points
      if @current_user.team
        @current_user.team.calculate_team_points
      end
      render json: @current_user, status: :accepted
    end

    def join_team
      team = Team.find(params[:team_id])
      @current_user.update(team: team)
      team.calculate_team_points
      render json: @current_user, status: :accepted
    end

    def leave_team
      team = @current_user.team
      @current_user.update(team: nil)
      team.calculate_team_points
      if team.users.empty?
          team.destroy
      end
      render json: @current_user, status: :accepted
    end

    def update_climbs
      if @current_user.team.present?
        climbs_data = params[:user][:climbs]
    
        climbs_data.each do |user_climb|
          climb_id = user_climb[:id]
          completed = user_climb[:completed]
    
          climb = Climb.find(climb_id)
          climb.calculate_points(@current_user)
    
          if completed
            user_climb = @current_user.user_climbs.find_or_initialize_by(climb_id: climb_id)
            user_climb.save
          end
        end
        
        submitted_climb_ids = climbs_data.map { |user_climb| user_climb[:id] }
        climbs_to_remove = @current_user.user_climbs.where.not(climb_id: submitted_climb_ids)
        climbs_to_remove.destroy_all
    
        @current_user.update_points
        @current_user.team.calculate_team_points
        render json: @current_user, status: :accepted
      else
        render json: { errors: "Must be on a team before you can submit completed climbs." }, status: :unprocessable_entity
      end
    end
  
    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :username, :password, :password_confirmation, :email, :handicap, :points, :team_id, :image, :image_url)
    end

    def check_team_member_limit
        team = Team.find(params[:team_id])
        if team.users.count >= 4
          render json: { errors: "The team is already full." }, status: :unprocessable_entity
        end
    end

end


