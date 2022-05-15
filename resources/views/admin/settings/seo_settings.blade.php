@extends('admin.layouts.main')
@section('admin-page-title')
    Seo Settings
@stop
@section('custom_css')
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-2 col-lg-8 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Seo Settings</h3>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.settings.seo.update') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Meta Title<span class="text-danger">*</span></label>
                                            <input type="text" name="title" value="{{ $seo->title }}"
                                                class="form-control" placeholder="Enter meta title">
                                            @if ($errors->has('title'))
                                                <small class="text text-danger">{{ $errors->first('title') }}</small>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label>Meta Description</label>
                                            <textarea class="form-control" name="meta_description" rows="5"
                                                placeholder="Enter meta description">{{ $seo->meta_description }}</textarea>
                                            @if ($errors->has('meta_description'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('meta_description') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Meta Keywords</label>
                                            <textarea class="form-control" name="meta_keywords" rows="5"
                                                placeholder="Enter meta keywords">{{ $seo->meta_keywords }}</textarea>
                                            @if ($errors->has('meta_keywords'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('meta_keywords') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Meta Image</label>
                                            <input type="file" name="meta_image" class="form-control">
                                            @if ($errors->has('meta_image'))
                                                <small class="text text-danger">{{ $errors->first('meta_image') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input type="submit" class="btn btn-block btn-success btn-flat"
                                            value="Update Settings" />
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
