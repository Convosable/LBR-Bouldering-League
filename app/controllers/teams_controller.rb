class TeamsController < ApplicationController

    def index
        render json: Team.all.order(team_points: :desc), status: :ok
    end

    def show
        render json: find_team, status: :ok
    end

    def create
        new_team = Team.create!(team_params)
        render json: new_team, status: :created
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
        params.permit(:team_name)
    end

end
