var nums_LED = 4;
var nums_DMX = 3;
inlets = 1; 
outlets = nums_LED; 
var in01_; //input values of all cell as list(array)
function list()
{
    in01_ = arguments;
    
    var data = new Array(nums_LED);
	for(var y = 0; y < nums_LED; y++) {
  		data[y] = new Array(nums_DMX);
		}
		
    for( var i = 0; i < nums_LED; i++){
		for( var j = 0; j < nums_DMX; j++){
        	data[i][j] = in01_[i*nums_DMX+j]; //入力リストを配列に格納
        	}
		}

    for( var t = 0; t < nums_LED; t++){
		data[t].unshift('brgb');
		outlet( t, data[t] );
	}
    
    delete data;
}