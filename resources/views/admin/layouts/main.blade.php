<!DOCTYPE html>
<html lang="en">
<head>
<title>
@yield('admin-page-title')
</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="{{asset('/public/backend/css/bootstrap.min.css')}}" />
<link rel="stylesheet" href="{{asset('/public/backend/css/bootstrap-responsive.min.css')}}" />
<link rel="stylesheet" href="{{asset('/public/backend/css/fullcalendar.css')}}" />
<link rel="stylesheet" href="{{asset('/public/backend/css/matrix-style.css')}}" />
<link rel="stylesheet" href="{{asset('/public/backend/css/matrix-media.css')}}" />
<link rel="stylesheet" href="{{asset('/public/backend/dataTable/dataTables.bootstrap4.min.css')}}" />
<!-- <link href="{{asset('/public/backend/font-awesome/css/font-awesome.css')}}" rel="stylesheet" /> -->
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
<link rel="stylesheet" href="{{asset('/public/backend/css/jquery.gritter.css')}}" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>
<!--test-->
<script src="{{asset('/public/backend/js/jquery.min.js')}}"></script> 

<script src="{{asset('/public/backend/dataTable/jquery.dataTables.min.js')}}"></script> 
<script src="{{asset('/public/backend/dataTable/dataTables.bootstrap4.min.js')}}"></script> 
</head>
<body>

@include('admin.layouts.header')
<!--sidebar-menu-->
@include('admin.layouts.navbar')
<!--sidebar-menu-->

<!--main-container-part-->
<div id="content">
@yield('admin_content')
</div>

<!--end-main-container-part-->

<!--Footer-part-->

@include('admin.layouts.footer')
<!--end-Footer-part-->

<script src="{{asset('/public/backend/js/excanvas.min.js')}}"></script> 

<script src="{{asset('/public/backend/js/jquery.ui.custom.js')}}"></script> 
<script src="{{asset('/public/backend/js/bootstrap.min.js')}}"></script> 
<script src="{{asset('/public/backend/js/jquery.flot.min.js')}}"></script> 
<script src="{{asset('/public/backend/js/jquery.flot.resize.min.js')}}"></script> 
<script src="{{asset('/public/backend/js/jquery.peity.min.js')}}"></script> 
<script src="{{asset('/public/backend/js/fullcalendar.min.js')}}"></script> 
<script src="{{asset('/public/backend/js/matrix.js')}}"></script> 
<script src="{{asset('/public/backend/js/matrix.dashboard.js')}}"></script> 
<script src="{{asset('/public/backend/js/jquery.gritter.min.js')}}"></script> 
<script src="{{asset('/public/backend/js/matrix.interface.js')}}"></script> 
<script src="{{asset('/public/backend/js/matrix.chat.js')}}"></script> 
<script src="{{asset('/public/backend/js/jquery.validate.js')}}"></script> 
<script src="{{asset('/public/backend/js/matrix.form_validation.js')}}"></script> 
<script src="{{asset('/public/backend/js/jquery.wizard.js')}}"></script> 
<script src="{{asset('/public/backend/js/jquery.uniform.js')}}"></script> 
<script src="{{asset('/public/backend/js/select2.min.js')}}"></script> 
<script src="{{asset('/public/backend/js/matrix.popover.js')}}"></script> 
<script type="text/javascript">

  // This function is called from the pop-up menus to transfer to
  // a different page. Ignore if the value returned is a null string:
  function goPage (newURL) {

      // if url is empty, skip the menu dividers and reset the menu selection to default
      if (newURL != "") {
      
          // if url is "-", it is this page -- reset the menu:
          if (newURL == "-" ) {
              resetMenu();            
          } 
          // else, send page to designated URL            
          else {  
            document.location.href = newURL;
          }
      }
  }

// resets the menu selection upon entry to this page:
function resetMenu() {
   document.gomenu.selector.selectedIndex = 2;
}
</script>
</body>
</html>
