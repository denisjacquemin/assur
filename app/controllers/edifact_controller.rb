class EdifactController < ApplicationController
  
  def test
    ic = EDI::E::Interchange.new( :version => 3, :charset => 'UNOB' )
    @msg = ic.new_message( :msg_type=>'ORDERS', :version=>'D', :release=>'96A',
                            :resp_agency=>'UN' )
  end
  
end
