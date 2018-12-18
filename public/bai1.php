<?php
/**
 * Created by PhpStorm.
 * User: MesaMtel
 * Date: 12/18/2018
 * Time: 9:52 AM
 */
define('userName', 'Le Huynh Tan Vu');
define('old', 24);
define('major', 'Developer');
$hello = 'Hello Everyone<br>';
$testInt = 123;
$testMinus = -123;
$testString = '123';
echo $hello;
echo userName;
echo '<br>Test constant value <br>';
echo old;
echo '<br>Test minus<br>';
echo $testInt - $testMinus;
echo '<br>Test sum<br>';
echo $testInt + $testMinus;
echo '<br>Test parse<br>';
echo (int)$testString;
echo '<br>';
if(is_int((int)$testString)){
    echo 'true';
} else {
    echo 'false';
}
// Test array
$mang1 = array();
$mang1[0] = 'bai 1';
$mang1[1] = 'bai 2';
$mang1[2] = 'bai 3';
$mang1[3] = 'bai 4';
$mang1[4] = 'bai 5';

echo '<br> Test Array<br>';
print_r($mang1) ;
echo '<br>';
echo $mang1[1];

// Test Array

$mang2 = array(
    'bai_1' =>'bai 1',
    'bai_2' =>'bai 2',
    'bai_3' =>'bai 3',
);
echo '<br>';
$mang2['bai_4'] = 'bai 4';
print_r($mang2);

// Toán tử và biểu thức

$bien1 = 1;
$bien2 = 2;
$bien3 = 3;

$boolean = true;

$tong = $bien1+$bien2+$bien3;
echo '<br> Tong <br>'; echo $tong;
$tich = $bien1*$bien2*$bien3;
echo '<br> Tich <br>'; echo $tich;
$thuong = $tich/$tong;
echo '<br> Thuong <br>'; echo $thuong;
$checkThuong = $thuong != 1;
if($checkThuong) echo '<br>thuong != 1'.$thuong; else echo  '<br>thuong == 1<br>'.$thuong;

// Độ ưu tiên theo thứ tự như sau: NOT -> AND -> OR
// Nối 2 chuỗi bằng dấu .
$boolean = !$boolean;
if($boolean) echo 'true'; else echo 'false';