class ClimbingSetsController < ApplicationController

    before_action :find_climbing_set, except: [:index, :create]
    skip_before_action :authorize

    def index
        render json: ClimbingSet.all.order(:week), status: :ok
    end

    def show
        render json: @climbing_set, status: :ok
    end

    def create
        new_climbing_set = ClimbingSet.new(climbing_set_params)

        if params[:image] && params[:image] != "null"
            new_climbing_set.image.attach(params[:image])
        end

        if new_climbing_set.save
            render json: new_climbing_set, status: :created
        else
            render json: { errors: new_climbing_set.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @climbing_set.update!(climbing_set_params)
        render json: climbing_set, status: :accepted
    end

    def destroy
        @climbing_set.delete
        head :no_content
    end

    private

    def find_climbing_set
        @climbing_set = ClimbingSet.find(params[:id])
    end

    def climbing_set_params
        params.require(:climbing_set).permit(:set_name, :week, :image, :image_url, :date_start, :date_end, :notes)
    end
    
end
