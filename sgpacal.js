
        function gpa()
        {
            var sgpa= document.getElementById("sgpa").value;
            var v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,pf=1;
            if(document.getElementById("coa").value>=5){
                 v1=(document.getElementById("coa").value);
            }else{
                 v1=0;
                 pf=0;
            }

            if(document.getElementById("ds").value>=5){
                 v2=(document.getElementById("ds").value);
            }else{
                 v2=0;
                 pf=0;
            }

            if(document.getElementById("os").value>=5){
                 v3=(document.getElementById("os").value);
            }else{
                 v3=0;
                 pf=0;
            }

            if(document.getElementById("pmr").value>=5){
                 v4=(document.getElementById("pmr").value);
            }else{
                 v4=0;
                 pf=0;
            }

            if(document.getElementById("ade").value>=5){
                 v5=(document.getElementById("ade").value);
            }else{
                 v5=0;
                 pf=0;
            }

            if(document.getElementById("exceed").value>=5){
                 v6=(document.getElementById("exceed").value);
            }else{
                 v6=0;
                 pf=0;
            }


            if(document.getElementById("dsl").value>=5){
                 v7=(document.getElementById("dsl").value);
            }else{
                 v7=0;
                 pf=0;
            }

            if(document.getElementById("jlab").value>=5){
                 v8=(document.getElementById("jlab").value);
            }else{
                 v8=0;
                 pf=0;
            }


            if(document.getElementById("rlab").value>=5){
                 v9=(document.getElementById("rlab").value);
            }else{
                 v9=0;
                 pf=0;
            }

            if(document.getElementById("eitk").value>=5){
                 v10=(document.getElementById("eitk").value);
            }else{
                 v10=0;
                 pf=0;
            }

            
            
            
            
            sgpa=((v1*3)+(v2*3)+(v3*3)+(v4*4)+(v5*3)+(v6*1)+(v7*(1.50))+(v8*(1.50))+(v9*2)+(v10*0))/22;

            var cg;

            cg= ((sgpa*22)+(document.getElementById("sem1").value*17)+(document.getElementById("sem2").value*17))/56;
            sgpa=sgpa.toFixed(2);
            cg=cg.toFixed(2);
            document.getElementById("sgpa").value= sgpa;
            document.getElementById("cgpa").value=cg;

            if(pf==0)
            {
                document.getElementById("pf").value="Fail";
            }
            else
            {
                document.getElementById("pf").value="Pass";
            }

        }
