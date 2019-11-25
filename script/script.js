function isValidChar(char){

        let txt = char;
        let found = false;
        let validChars = "+0123456789";

        for(j=0;j<txt.length;j++){ 
            let c = txt.charAt(j);
            found = false;
            for(x=0;x<validChars.length;x++){
                if(c==validChars.charAt(x)){
                    found=true;
                    break;
                }
            }
            if(!found){
			document.getElementById('txtFld').value = char.substring(0, char.length -1);
                break;             
				
            }
        }
    }