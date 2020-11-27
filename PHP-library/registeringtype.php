<?
//#載入 外部套件系統 設定檔 #//
    //伺服器-根目錄
    $server_root = '/raid/vhost/cp135746/public_html/';
    //網域-根目錄
    $registeringtype_root =  $server_root.'registeringtype/';

//#END 載入 外部套件系統 主程式設定檔 #//


//#載入 外部套件系統 API串接#//
    //載入 動名片-工具列 套件
    include $registeringtype_root."dist/kit/card-kit/controllers/toolbar-KUJI.php";

//#END 載入 外部套件系統 API串接#//
?>