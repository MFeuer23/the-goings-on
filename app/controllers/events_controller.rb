class EventsController < ApplicationController
  def events


    url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?source=EO&limit=3"

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
