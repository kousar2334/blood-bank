<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<html>
<head>
	<title>Admin Login</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <style>
        html,body{
			height: 100%;
			margin: 0;
			background: rgb(2,0,36);
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(149,199,20,1) 0%, rgba(0,212,255,1) 96%);
		
		}
   
   .myForm{
   	background-color: rgba(0,0,0,0.5) !important;
   	padding: 15px !important;
   border-radius: 15px !important;
   color: white;
   
   }

   input{
   	border-radius:0 15px 15px 0 !important;

   }
   input:focus{
       outline: none;
box-shadow:none !important;
border:1px solid #ccc !important;

   }

   .br-15{
   	border-radius: 15px 0 0 15px !important;
   }

   #add_more{
   	color: white !important;
   	background-color: #fa8231 !important;
   	border-radius: 15px !important;
   	border: 0 !important;

   }
   #remove_more{
   	color: white !important;
   	background-color: #fc5c65 !important;
   	border-radius: 15px !important;
   	border: 0 !important;
   	display: none;

   }
   	
   .submit_btn{
   	border-radius: 15px !important;
    background-color: #95c714 !important;
    border: 0 !important;
   }
    </style>
</head>

<!-- Coded With Love By Mutiullah Samim-->
<body>
	<dvi class="container h-100">
	<div class="d-flex justify-content-center">
		<div class="card mt-5 col-md-4 animated bounceInDown myForm">
			<div class="card-header">
                <center>
                <h4>Admin</h4>
                </center>
				
			</div>
			<div class="card-body">
				<form method="post" action="{{route('admin.login.submit')}}">
                    @csrf
					<div id="dynamic_container">
						
						<div class="input-group mt-3">
							<div class="input-group-prepend">
								<span class="input-group-text br-15"><i class="fas fa-at"></i></span>
							</div>
							<input type="email" name="email" placeholder="Email" class="form-control"/>
						</div>
						<div class="input-group mt-3">
							<div class="input-group-prepend">
								<span class="input-group-text br-15"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="password" placeholder="password" class="form-control"/>
						</div>
					</div>
				
			</div>
			<div class="card-footer">
				<!-- <a class="btn btn-secondary btn-sm" id="add_more"><i class="fas fa-plus-circle"></i> Add</a> -->
				
				<button class="btn btn-success btn-sm float-right submit_btn"><i class="fas fa-arrow-alt-circle-right"></i> Login</button>
            </div>
            </form>
		</div>
	</div>
    </dvi>
    <script>
        	var i=0;
	$(document).ready(function(){
     $('#add_more').on('click', function(){
      var colorR = Math.floor((Math.random() * 256));
      var colorG = Math.floor((Math.random() * 256));
      var colorB = Math.floor((Math.random() * 256));
      i++;
      var html ='<div id="append_no_'+i+'" class="animated bounceInLeft">'+
          '<div class="input-group mt-3">'+
		  '<div class="input-group-prepend">'+
		  '<span class="input-group-text br-15" style="color:rgb('+colorR+','+colorG+','+colorB+'">'+
		  '<i class="fas fa-user-graduate"></i></span>'+
		  '</div>'+
		  '<input type="text" placeholder="Student Name"  class="form-control"/>'+
		  '</div>'+
		  '<div class="input-group mt-3">'+
		  '<div class="input-group-prepend">'+
		  '<span class="input-group-text br-15" style="color:rgb('+colorR+','+colorG+','+colorB+'">'+
		  '<i class="fas fa-phone-square"></i></span>'+
		  '</div>'+
		  '<input type="text" placeholder="Student Phone" class="form-control"/>'+
		  '</div>'+
		  '<div class="input-group mt-3">'+
		  '<div class="input-group-prepend">'+
		  '<span class="input-group-text br-15" style="color:rgb('+colorR+','+colorG+','+colorB+'">'+
		  '<i class="fas fa-at"></i></span>'+
		  '</div>'+
		  '<input type="email" placeholder="Student Email" class="form-control"/>'+
		  '</div></div>';

	  $('#dynamic_container').append(html);
	  $('#remove_more').fadeIn(function(){
	  	 $(this).show();
	  });
     });

     $('#remove_more').on('click', function(){
         
         $('#append_no_'+i).removeClass('bounceInLeft').addClass('bounceOutRight')
            .fadeOut(function(){
            	$(this).remove();
            });
            i--;
            if(i==0){
            	$('#remove_more').fadeOut(function(){
            		$(this).hide()
            	});;
            }
   
     });
	});
    </script>
</body>
</html>