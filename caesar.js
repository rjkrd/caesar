function caesar_encrypt(data_id,shift_id) {
  caesar(data_id,shift_id,true);
}

function caesar_decrypt(data_id,shift_id) { 
  caesar(data_id,shift_id,false);
}

function caesar(data_id,shift_id,encode) {
  var node   = document.getElementById(data_id);
  var str    = node.value; 
  var shift  = parseInt(document.getElementById(shift_id).value);
  if(shift < 0 || shift > 25)
  {
	  alert("Invalid shift\nNeeds to be between 1 and 25");
	  return;
  }
  if(!encode)
	  shift  = 26 - shift;
  var lower  = "abcdefghijklmnopqrstuvwxyz";
  var upper  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for ( pos in str ) {	  
     if ( upper.indexOf( str[pos] ) > -1 ) {
		 loc = upper.indexOf( str[pos] );
		 chg = (loc + shift) % 26
        result += upper[ chg  ];
    } else if ( lower.indexOf( str[pos] ) > -1 ) {
		 loc = lower.indexOf( str[pos] );
		 chg = (loc + shift) % 26
        result += lower[ chg  ];
    } else{
		result += str[pos];
    }
  }
  node.value = result;
}