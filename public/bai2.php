<?php
/**
 * Created by PhpStorm.
 * User: MesaMtel
 * Date: 12/18/2018
 * Time: 10:39 AM
 */

/**
 *  Bài 2
 *  Test Rẽ nhánh, Lặp For, Lặp While, Switch case
 */

echo '----------------Test If else ---------------<br>';

$so = 100;
if ($so % 2 == 0) {
    if ($so % 5 == 0) {
        echo 'So ' . $so . ' vua chia het cho 2 vua chia het cho 5<br>';
    } else {
        echo 'So ' . $so . ' chi chia het cho 2<br>';
    }
} else {
    echo 'So ' . $so . 'khong chia het ca 2 va 5<br>';
}

echo '-----------------Test Switch case--------------<br>';

$sodu = 100 % 3;

switch ($sodu) {
    case 0:
        echo 'So du = 0<br>';
        break;
    case 1:
        echo 'So du = 1<br>';
        break;
    case 2:
        echo 'So du = 2<br>';
        break;
    case 3:
        echo 'So du = 3<br>';
        break;
    default:
        echo 'So du = 0<br>';
        break;
}

echo '-----------------Test For---------------------<br>';

$sinhvien = array(
    'Nguyễn A',
    'Nguyễn B',
    'Nguyễn C',
    'Nguyễn D',
    'Nguyễn E',
    'Nguyễn F'
);
for ($i = 0; $i < count($sinhvien); $i++){
    echo $sinhvien[$i].'<br>';
}

echo '-----------------Test While---------------------<br>';

$i = 0;
while ($i <= 10){
    if($i == 10){
        echo $i.'<br>';
    } else echo $i . ' - ';
    $i++;
}

$j = 10;
$count = 0;
while ($i < 100 && $j > 5){
    $i++;
    $j -= 2;
    $count ++;
    echo $count.'<br>';
}


echo '-----------------Test Do While---------------------<br>';
$i = 0;
do{
    echo $i.'<br>';
    $i++;
}while ($i <= 5);

echo '-----------------Test Foreach---------------------<br>';

foreach ($sinhvien as $key => $value){
    echo $value.'<br>';
}

//exit();
echo '-----------------Test Break---------------------<br>';

for ($i = 1; $i <= 100; $i++)
{
    echo $i . '<br>';
    if ($i == 10)
    {
        break;
    }
}

//die();

echo '-----------------Test Continue---------------------<br>';

for ($i = 1; $i <= 10; $i++)
{
    if ($i == 5)
    {
        echo 'continue ';
        continue;
    }
    echo $i . ' ';
}