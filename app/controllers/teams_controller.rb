class TeamsController < ApplicationController

    def index
        render json: Team.all.order(team_points: :desc), status: :ok
    end

    def show
        render json: find_team, status: :ok
    end

    def create
        if @current_user.team.present?
            render json: { errors: "User is already a member of a team" }, status: :unprocessable_entity
        else
            new_team = Team.create(team_params)
            if new_team.persisted?
                @current_user.update(team_id: new_team.id)
                new_team.calculate_team_points
                render json: new_team, status: :created
            else
                render json: { errors: new_team.errors.full_messages }, status: :unprocessable_entity
            end
        end
    end

    def update
        team = find_team
        team.update!(team_params)
        render json: team, status: :accepted
    end

    def destroy
        find_team.delete
        head :no_content
    end

    private

    def find_team
        Team.find(params[:id])
    end

    def team_params
        params.require(:team).permit(:team_name)
    end

end
