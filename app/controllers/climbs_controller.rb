class ClimbsController < ApplicationController

    def index
        render json: Climb.all.order(:grade), status: :ok
    end

    def show
        render json: find_climb, status: :ok
    end

    def create
        new_climb = find_climbing_set.climbs.create!(climb_params)
        render json: new_climb, status: :created
    end

    def update
        climb = find_climbing_set.climbs.find(params[:id])
        climb.update!(climb_params)
        render json: climb, status: :accepted
    end

    def destroy
        climb = find_climbing_set.climbs.find(params[:id])
        climb.delete
        head :no_content
    end

    private

    def find_climb
        Climb.find(params[:id])
    end

    def climb_params
        params.require(:climbs).permit(:grade, :color)
    end

    def find_climbing_set
        ClimbingSet.find(params[:id])
    end
end