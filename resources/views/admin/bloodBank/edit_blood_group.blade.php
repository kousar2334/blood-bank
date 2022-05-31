@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Edit Blood Group') }}
@stop
@section('custom_css')

@stop
@section('admin_content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 col-lg-6 col-md-12 col-sm-12 mt-4">
                    <div class="card ">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Edit Blood Group') }}</h3>
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="btn btn-success btn-sm float-right text-white">{{ translate('Blood Groups') }}</a>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.blood.group.update') }}" method="POST">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}</label>
                                            <input type="text" name="name" value="{{ $bg_info->name }}"
                                                class="form-control" placeholder="Enter ...">
                                            <input type="hidden" name="id" value="{{ $bg_info->id }}">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}</label>
                                            <input type="text" name="bn_name" value="{{ $bg_info->bn_name }}"
                                                class="form-control" placeholder="Enter ...">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Description') }}</label>
                                            <textarea class="form-control" name="description" rows="3"
                                                placeholder="Enter ...">{{ $bg_info->description }}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-right mt-2">
                                    <input type="submit" class="btn btn-success" value="{{ translate('Update') }}" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
@section('custom_script')

@stop
