@extends('admin.layouts.main')
@section('admin-page-title')
    About Us
@stop
@section('custom_css')
    {{-- <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script> --}}

    <script>
        // tinymce.init({
        //     selector: 'textarea'
        // });
        tinymce.init({
            selector: '#about_us',
            // theme: 'modern',
            // paste_data_images: true,
            // image_advtab: true,
            // media_live_embeds: true,
            // media_dimensions: true,
            // // convert_urls:true,
            // relative_urls: false,
            // remove_script_host: false,
            plugins: [
                "advlist autolink lists link image charmap print preview hr anchor pagebreak code preview",
                "searchreplace wordcount visualblocks visualchars code fullscreen",
                "insertdatetime media nonbreaking save table directionality",
                "emoticons template paste textpattern"
            ],
            menubar: true,
            toolbar1: 'table formatselect  fontsizeselect bold italic underline blockquote alignleft aligncenter alignright  bullist numlist',
            toolbar2: 'strikethrough hr backcolor forecolor link removeformat charmap outdent indent undo redo code preview',
            min_height: 700,

        });
    </script>
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">About Us</h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('admin.blood.donar.list') }}">Settings</a></li>
                        <li class="breadcrumb-item active">About Us</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content-header -->
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">

                <div class="col-lg-12 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">About Us</h3>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.settings.general.about.us.update') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="offset-3 col-sm-6">
                                        <div class="form-group">
                                            <input type="hidden" name="id" value="{{ $settings->id }}">
                                            <label>About Us</label>
                                            <textarea class="form-control" id="about_us" name="about_us" rows="10"
                                                placeholder="Enter Address">{{ $settings->about_us }}</textarea>
                                            @if ($errors->has('about_us'))
                                                <small class="text text-danger">{{ $errors->first('about_us') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="offset-3 col-sm-3 text-center">
                                        <input type="submit" class="btn btn-block btn-success btn-flat"
                                            value="Update About Us" />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
@section('custom_script')

@stop
