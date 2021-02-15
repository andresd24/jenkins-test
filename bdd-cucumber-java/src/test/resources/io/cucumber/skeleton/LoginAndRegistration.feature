Feature: Login and Registration

  Scenario: a few more cukes
    Given I have 4 cukes in my belly
    When I wait 300 milliseconds
    Then my belly should growl

  Scenario Outline: Register in application trying to cover a success message and as many error messages
    Given The user opens a Browser and navigates to the Fifa app root URL
    Then  Validate that the Welcome Page loads correctly
    And The user clicks on the top right menu Register button
    Given The user enters the required registration data "<name>", "<surname>", "<email>", "<password>", "<confirmation>" and clicks the Register button
    Then The response registration success or error message that shows up needs to match the expected "<message>"
    And The user closes the browser session

    Examples:
      | name  			| surname 					|	email  				  | password 		| confirmation				 | message																								                                                                            |
      | admin			| admin 					| admin@admin.com		  | Testing123!		| Testing123!		  		 | The email you entered has already been registered at the Zoo. Please follow password recovery link.                                                                          	|
      | Edward	 		| Martins 	 				| emartins@gmail.com 	  |	T3sting123!		| Testing123!				 | The passwords you entered didn't match. Please try again.															                                                           	|
      |	Johan			| Cuello					| johanbademail			  |	Testing123!		| Testing123!				 | The email you entered is not a valid email. Please try again.   																													|
      | Andres			| Meza						| andresmeza@n8.com		  | Testing123	    | Testing123				 | Your password needs to be at least eight characters long, combine upper case and lower case letters, include a number, and a one of these three special characters (@, ?. or !). |
      | Empty			| field						| 						  |	Testing123!		| Testing123!				 | Please fill all the fields in the registration form since all are required tor register at the Zoo																		        |
  #    | Carito		    | Selina					| random@random.com		  | Testing123!     | Testing123!			     | You have successfully registered at the Zoo please click this link to continue                                                                                                   |
