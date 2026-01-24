require "test_helper"

class AdminControllerTest < ActionDispatch::IntegrationTest
  test "should get index if logged in admin" do
    login_as users(:one)
    get admin_url
    assert_response :success
  end

end