<?php
$input = file_get_contents('php://input');
file_put_contents('debug.txt', $input);
echo 'File updated';
?>
