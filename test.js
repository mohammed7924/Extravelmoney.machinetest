document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    // Get form values
    const emailOrPhone = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    // Validation checks
    if (!isValidEmailOrPhone(emailOrPhone)) {
      alert("Please enter a valid email address or a 10-digit phone number.");
      return;
    }
    
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
  
    
    alert("Login successful!");
  
    // Reset form after submission
    document.getElementById("loginForm").reset();
  });
  
  // Validation function for email or phone number
  function isValidEmailOrPhone(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    const phonePattern = /^[0-9]{10}$/; // Validates 10-digit phone number
    return emailPattern.test(value) || phonePattern.test(value);
  }
  