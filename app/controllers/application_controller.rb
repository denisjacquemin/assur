class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :set_user_language
  
  private
    def login_required
      unless user_signed_in? or ['sessions'].include? controller_name
        flash[:error] = t("errors.messages.you_must_be_logged")
        redirect_to new_user_session_path
      end
    end
    
    def set_user_language
      I18n.locale = 'fr'
    end
end
