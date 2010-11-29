class ApplicationController < ActionController::Base
  protect_from_forgery
  
  private
    def login_required
      unless user_signed_in? or ['sessions'].include? controller_name
        flash[:error] = 'You must be logged in to view this page.'
        redirect_to new_user_session_path
      end
    end
end
