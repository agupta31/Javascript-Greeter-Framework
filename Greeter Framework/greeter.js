
(function(global,jQuery){

     var greetr=function(firstname,lastname,lang){

     	  return new greetr.init(firstname,lastname,lang);
     } 
     
    var greetingMapper={
                 "en":"hello",
                  "es":"hola",
                  "hin":"namaste",
                   "per":"salaam",
                    "fer":"bonjour",
                     "ita":"ciao",
                     "ger":"Guten Tag",
                     "punj":"satsriakal",
                     "bn":"kemon acho"

                   };

     var validLanguages=['en','es','hin','fer','per','ger','punj',"bn","ita"];
   
                    
     
     greetr.prototype={

     	validateLanguage:function(){
                  if(validLanguages.indexOf(this.lang)!==-1)
                  	   return true;
                  	else 
                  	   return false;

     	  },

     	 makeFormalGreeting:function(){

     	 	  return greetingMapper[this.lang]+" "+this.firstname+" "+this.lastname;

     	     },

           setLanguage:function(language){
               this.lang=language;
                if(!this.validateLanguage())
                      throw "invalid language selection";


                      return this;
                 
           },

           HTMLGreeting:function(selector){
                    
                    if(!$)
                       throw "jQuery not loaded";
                     if(!selector)
                       throw "jQuery selector not loaded";

                      var msg=this.makeFormalGreeting();

                      $(selector).html(msg);


           }
     	    
       
      
     }    ;
    
     greetr.init=function(firstname,lastname,language){
            this.firstname=firstname;
            this.lastname=lastname;
            this.lang=language ||'en';
    }

    greetr.init.prototype=greetr.prototype;

    global.greet=global.$G=greetr;

})(window,jQuery);