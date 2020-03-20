  new Vue({
    el:"#vue-app",
    data : {
     previous :null,
    operators : null,
     operatorClicked : false,
     current : "",
   },
    methods : {
        clear : function(){
           this.current="";
        },
        sign : function(){
            this.current = this.current.charAt(0)=== '-' ? this.current.slice(1) : `-${this.current}`;
        },
        percent : function(){
            this.current = `${parseFloat(this.current) / 100}`
        },
          append : function(number){
             if(this.operatorClicked){
                this.current= "";
                this.operatorClicked = false;
            }
              this.current = `${this.current}${number}`;
            },
             dot : function(){
             
            if(this.current ===""){
                this.append("");
             }
             else if(this.current.indexOf('.')===-1){
                this.append('.');
             }
             
        },
          setPrevious : function(){
             this.operatorClicked = true;
             this.previous = this.current;
        },
        divide : function(){
                this.operators = (a, b) => a / b;
               this.setPrevious();
        },
           times :function(){
                this.operators = (a, b) => a * b;
                this.setPrevious();
        },
        subtract : function(){
                 this.operators = (a, b) => a - b;
                 this.setPrevious();
        },
        plus : function(){
                  this.operators = (a, b) => a + b;
                  this.setPrevious();
        },
        equal : function(){
                 this.current = this.operators(parseFloat(this.previous), parseFloat(this.current));
        }
     
    }
 
});