class ClimbsController < ApplicationController

    before_action :find_climbing_set, except: [:index]
    

    def index
        render json: Climb.all.order(:grade), status: :ok
    end

    def create
        new_climb = @climbing_set.climbs.create!(climb_params)
        render json: new_climb, status: :created
    end

    def update
        climb = @climbing_set.climbs.find(params[:id])
        climb.update!(climb_params)
        render json: climb, status: :accepted
    end

    def destroy
        climb = @climbing_set.climbs.find(params[:id])
        climb.delete
        head :no_content
    end

    private

    def climb_params
        params.require(:climb).permit(:grade, :color, :name)
    end

    def find_climbing_set
        @climbing_set = ClimbingSet.find(params[:climbing_set_id])
    end
end