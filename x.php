<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	
	<?php
	echo "b";
		$mysqli = new pdo("mysql:host=localhost;port=3306","root","12345");

		// Check connection
		if ($mysqli -> connect_errno) {
		  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
		  exit();
		}

		echo "hhh";

		// Perform query
		$result=$mysqli->query("show databases");
		echo "hjhj";

		while($row=$result->fetch(pdo::FETCH_ASSOC)){
			echo nl2br(print_r($row)."\n");
		}

		echo "hi";
		$mysqli -> close();
	?>

</body>
</html>
