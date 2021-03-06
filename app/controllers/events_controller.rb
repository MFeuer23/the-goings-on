class EventsController < ApplicationController
  def events

    if params[:category] == "all"
      url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=4&status=#{params[:status]}"
    else
      url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/#{params[:category]}?limit=4&status=#{params[:status]}"
    end

    begin
    response = RestClient::Request.execute(
      method: :get,
      url: "#{url}",
    )
    rescue RestClient::ExceptionWithResponse => e
    puts e.response
    end

    render json: response

  end

end
