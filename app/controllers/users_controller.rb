class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    
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
        render json: team, status: :accepted
    end

    def leave_team
        @current_user.update(team: nil)
        render json: { message: 'left the team' }, status: :accepted
    end

    def update_climbs
        @current_user.user_climbs.clear
        climb_ids = params[:user][:climbs]
        climb_ids.each do |climb_id|
            climb = Climb.find(climb_id)
            climb.calculate_points(@current_user)
            @current_user.user_climbs.create(climb_id: climb_id)
        end
        @current_user.update_points
        @current_user.team.calculate_team_points
        render json: @current_user, status: :accepted
    end


# USING FOR POSTMANTESTING

    # def index
    #     render json: User.all
    # end

    # def show
    #     user = User.find(params[:id])
    #     render json: user, status: :ok
    # end

    # def update
    #     @current_user.update!(user_params)
    #     render json: @current_user, status: :accepted
    # end

   

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :username, :password, :password_confirmation, :email, :handicap, :points, :team_id)
    end

end


