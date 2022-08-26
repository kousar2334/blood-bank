@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('About Us') }}
@stop
@section('custom_css')

    <!----tiny mce--->
    <script src="{{ asset('/static/backend/js/tinymce.min.js') }}"></script>
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
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-2 col-lg-8 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('About Us') }}</h3>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.settings.general.about.us.update') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="form-group col-12">
                                        <input type="hidden" name="id" value="{{ $settings->id }}">
                                        <textarea class="form-control" id="about_us" name="about_us" rows="10"
                                            placeholder="Enter Address">{{ $settings->about_us }}</textarea>
                                        @if ($errors->has('about_us'))
                                            <small class="text text-danger">{{ $errors->first('about_us') }}</small>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group text-right mt-2">
                                    <input type="submit" class="btn  btn-success" value="{{ translate('Update') }}" />
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
