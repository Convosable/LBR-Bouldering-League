class UserClimbsController < ApplicationController

    def index
        render json: UserClimb.all 
    end

    private

    def user_climb_params
        params.permit(:completion_status, :climbing_set_id)
    end

end
