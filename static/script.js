$(document).ready(function() {
    $('#login-form').submit(function(e) {
      e.preventDefault(); // Prevent form submission
  
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Make AJAX request
      $.ajax({
        url: '/login', // Replace with your backend API endpoint
        method: 'POST',
        data: { username: username, password: password },
        success: function(response) {
          // Handle successful login
          $('#message').removeClass('text-danger').addClass('text-success').text(response.message);
        },
        error: function(xhr, status, error) {
          // Handle login error
          $('#message').removeClass('text-success').addClass('text-danger').text('Login failed. Please try again.');
        }
      });
    });
  });