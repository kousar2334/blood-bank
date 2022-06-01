@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('New Language') }}
@stop
@section('custom_css')
    <!-- Select2 -->
    <link rel="stylesheet" href="{{ asset('/static/backend/plugins/select2/css/select2.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('/static/backend/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css') }}">
@stop
@section('admin_content')
    </section>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 col-lg-6 col-md-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Language Information') }}</h3>
                            <a href="{{ route('admin.language.list') }}"
                                class="btn btn-info btn-sm float-right text-white">
                                {{ translate('Languages') }}
                            </a>
                        </div>
                        <div class="card-body row">
                            <form role="form" action="{{ route('admin.language.new.store') }}" method="POST"
                                class="col-md-12">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}</label>
                                            <input type="text" name="name" value="{{ old('name') }}"
                                                class="form-control" placeholder="Enter Name...">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Code') }}</label>
                                            <input type="text" name="code" value="{{ old('code') }}"
                                                class="form-control" placeholder="Enter Code...">
                                            @if ($errors->has('code'))
                                                <small class="text text-danger">{{ $errors->first('code') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Code') }}</label>
                                            <select class="select2 form-control" data-placeholder="Select a option">
                                                @foreach (\File::files(base_path('public/flags')) as $path)
                                                    <option value="{{ pathinfo($path)['filename'] }}"
                                                        class="text-upper">
                                                        {{ pathinfo($path)['filename'] }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mt-2 text-right">
                                    <button type="submit" class="btn btn-success">{{ translate('Save') }}</button>
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
    <!-- Select2 -->
    <script src="{{ asset('/static/backend/plugins/select2/js/select2.full.min.js') }}"></script>
    <script>
        $('.select2').select2({
            theme: 'bootstrap4'
        })
    </script>
@stop
