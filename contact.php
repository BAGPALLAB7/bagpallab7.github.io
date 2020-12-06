<?php
	
		$name=$_POST['name'];
		$email=$_POST['email'];
		$message=$_POST['message'];

		echo '<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Hi! $name </h4>
  <p>Thank you for contact.</p>
  <hr>
  <p class="mb-0">We will reach you soon at $email.</p>
</div>'
	


?>
