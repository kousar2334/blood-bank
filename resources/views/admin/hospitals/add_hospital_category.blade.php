@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Add New Hospital Category') }}
@stop
@section('custom_css')
@stop
@section('admin_content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 col-lg-6 col-md-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('New Hospital Category') }}</h3>
                            <a href="{{ route('admin.hospital.list') }}"
                                class="btn btn-info btn-sm float-right text-white">{{ translate('Hospital & Clinic') }}</a>
                            <a href="{{ route('admin.hospital.category.list') }}"
                                class="mr-2 btn btn-success btn-sm float-right text-white">{{ translate('Hospital Categories') }}</a>
                        </div>
                        <div class="card-body row">
                            <form role="form" action="{{ route('admin.hospital.category.store') }}" method="POST"
                                class="col-md-12">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}</label>
                                            <input type="text" name="name" value="{{ old('name') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}</label>
                                            <input type="text" name="bn_name" value="{{ old('bn_name') }}"
                                                class="form-control" placeholder="Enter ...">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Description') }}</label>
                                            <textarea class="form-control" name="description" rows="3"
                                                placeholder="Enter ...">{{ old('description') }}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-right mt-2">
                                    <input type="submit" class="btn btn-success" value="{{ translate('Save') }}" />
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
