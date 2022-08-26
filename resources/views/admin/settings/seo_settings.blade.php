@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Seo') }}
@stop
@section('custom_css')
@stop
@section('admin_content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-2 col-lg-8 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Seo') }}</h3>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.settings.seo.update') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Meta Title') }}<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="title" value="{{ $seo->title }}"
                                                class="form-control" placeholder="Enter meta title">
                                            @if ($errors->has('title'))
                                                <small class="text text-danger">{{ $errors->first('title') }}</small>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label>{{ translate('Meta Description') }}</label>
                                            <textarea class="form-control" name="meta_description" rows="5"
                                                placeholder="Enter meta description">{{ $seo->meta_description }}</textarea>
                                            @if ($errors->has('meta_description'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('meta_description') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Meta Keywords') }}</label>
                                            <textarea class="form-control" name="meta_keywords" rows="5"
                                                placeholder="Enter meta keywords">{{ $seo->meta_keywords }}</textarea>
                                            @if ($errors->has('meta_keywords'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('meta_keywords') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Meta Image') }}</label>
                                            <input type="file" name="meta_image" class="form-control">
                                            @if ($errors->has('meta_image'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('meta_image') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-right mt-2">
                                    <input type="submit" class="btn btn-success" value="{{ translate('Update') }}" />
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
