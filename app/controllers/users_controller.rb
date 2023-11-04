class UsersController < ApplicationController

    skip_before_action :authorize, only: :create
    before_action :check_team_member_limit, only: [:join_team]


    
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user, status: :ok
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
            climbs_data.each do |user_climb|
                climb_id = user_climb[:id]
                completed = user_climb[:completed]

                climb = Climb.find(climb_id)
                climb.calculate_points(@current_user)
                @current_user.user_climbs.create(climb_id: climb_id, completed: completed)
            end
            @current_user.update_points
            @current_user.team.calculate_team_points
            render json: @current_user, status: :accepted
        else
            render json: {errors: "Must be on a team before you can submit completed climbs."}, status: :unprocessable_entity
        end
    end

    ## nned to fix update climbsd to handle diffrent climbing sets


# USING FOR POSTMANTESTING

    # def index
    #     render json: User.all
    # end

    # def show
    #     user = User.find(params[:id])
    #     render json: user, status: :ok
    # end

    def update
        @current_user.update!(user_params)
        # if Hnadicap changes, then update point?
        @current_user.update_points
        @current_user.team.calculate_team_points
        render json: @current_user, status: :accepted
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :username, :password, :password_confirmation, :email, :handicap, :points, :team_id)
    end

    def check_team_member_limit
        team = Team.find(params[:team_id])
        if team.users.count >= 4
          render json: { errors: "The team is already full." }, status: :unprocessable_entity
        end
    end

end


