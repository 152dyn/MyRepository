<?php
header("Content-type:text/html;charset=utf-8");
Class DbHe{
    private $con=null;
    public function Open() {
    	if ($this->con) {
    		return;
    	}
    	$this->con=mysqli_connect("localhost","root","admin");
    	$this->con->query("SET NAMES 'UTF8'");
    	if(!$this->con){
    		die("数据库不能连接".mysqli_error());
    	}
    	$database=mysqli_select_db($this->con,"curd");
    	if (!isset($database)) {
    		die("数据库不存在");
    	}
    }

    public function Query($sql) {
    	if (empty($this->con)) {
    		$this->Open();
    	}
    	$result=mysqli_query($this->con,$sql);
    	return $result;
    }
    public function NotQuery($sql){
        if(empty($this->con)){
            $this->Open();
        }
        $result=mysqli_query($this->con,$sql);
        mysqli_close($this->con);
        return $result;
    }

    public function Close(){
        if($this->con){
            mysqli_close($this->con);
            $this->con=null;
        }
    }
}