class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    before_action :check_team_member_limit, only: [:join_team]

    def show
        render json: @current_user, status: :ok
    end

    def create 
      user = User.new(user_params)
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
      @current_user.team.calculate_team_points
      render json: @current_user, status: :accepted
  end

    def join_team
        team = Team.find(params[:team_id])
        @current_user.update(team: team)
        render json: @current_user, status: :accepted
    end

    def leave_team
        team = @current_user.team
        @current_user.update(team: nil)
        if team.users.empty?
            team.destroy
        end
        render json: @current_user, status: :accepted
    end

    def update_climbs
        if @current_user.team.present?
          climbs_data = params[:user][:climbs]
          updated_climbs = []
      
          climbs_data.each do |user_climb|
            climb_id = user_climb[:id]
            completed = user_climb[:completed]
      
            climb = Climb.find(climb_id)
            climb.calculate_points(@current_user)
      
            # Only create or update the user_climb if completed is true
            if completed
              user_climb = @current_user.user_climbs.find_or_initialize_by(climb_id: climb_id)
              user_climb.save
              updated_climbs << climb_id
            end
          end
      
          # Remove any user_climbs that are not in the updated_climbs list
          @current_user.user_climbs.where.not(climb_id: updated_climbs).destroy_all
      
          @current_user.update_points
          @current_user.team.calculate_team_points
          render json: @current_user, status: :accepted
        else
          render json: { errors: "Must be on a team before you can submit completed climbs." }, status: :unprocessable_entity
        end
    end

    

# USING FOR POSTMANTESTING

    def index
        render json: User.all
    end

  #   def show
  #       user = User.find(params[:id])
  #       render json: user, status: :ok
  #   end

  #   def destroy
  #     user = User.find(params[:id])
  #     user.delete
  #     head :no_content
  # end

  

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


