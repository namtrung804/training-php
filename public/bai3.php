<?php
/**
 * Created by PhpStorm.
 * User: MesaMtel
 * Date: 12/18/2018
 * Time: 11:47 AM
 */

echo '-------------------- Function-----------------<br>';

static $number = 124;

if(checkNumber($number)){
    echo 'So chan<br>';
} else echo 'So le<br>';

function checkNumber($number){
    if($number%2 == 0)return true; else return false;
}