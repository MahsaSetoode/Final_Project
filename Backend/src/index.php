<?php

use CRUD\Controller\TaskController;

include ("loader.php");

$controller = new TaskController();
$controller->switcher(explode("?",$_SERVER['REQUEST_URI'])[0],$_REQUEST);