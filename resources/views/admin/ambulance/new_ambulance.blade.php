@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Add New Ambulance') }}
@stop
@section('custom_css')
@stop
@section('admin_content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 col-lg-6 col-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Add New Ambulance') }}</h3>
                            <a href="{{ route('admin.ambulance.all') }}"
                                class="btn btn-success btn-sm float-right text-white">{{ translate('All Ambulance') }}</a>
                            <a href="{{ route('admin.ambulance.category.add') }}"
                                class="btn btn-info btn-sm float-right text-white mr-3">{{ translate('Add New Category') }}</a>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.ambulance.store') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="form-row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}<span class="text-danger">*</span></label>
                                            <input type="hidden" name="status" value="1">
                                            <input type="text" name="name" value="{{ old('name') }}"
                                                class="form-control" placeholder="Enter Name">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}</label>
                                            <input type="text" name="bn_name" value="{{ old('bn_name') }}"
                                                class="form-control" placeholder="Enter Bangla Name">
                                            @if ($errors->has('bn_name'))
                                                <small class="text text-danger">{{ $errors->first('bn_name') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Category') }}<span
                                                    class="text-danger">*</span></label>
                                            <select class="form-control" name="cat_id" value="{{ old('cat_id') }}">
                                                @foreach ($all_cats as $cat)
                                                    <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('cat_id'))
                                                <small class="text text-danger">{{ $errors->first('cat_id') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Phone') }}</label>
                                            <input type="text" name="phone" value="{{ old('phone') }}"
                                                class="form-control" placeholder="Enter Phone">
                                            @if ($errors->has('phone'))
                                                <small class="text text-danger">{{ $errors->first('phone') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Mobile') }}<span class="text-danger">*</span></label>
                                            <input type="text" name="mobile_1" value="{{ old('mobile_1') }}"
                                                class="form-control" placeholder="Enter Mobile">
                                            @if ($errors->has('mobile_1'))
                                                <small class="text text-danger">{{ $errors->first('mobile_1') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Mobile') }}</label>
                                            <input type="text" name="mobile_2" value="{{ old('mobile_2') }}"
                                                class="form-control" placeholder="Enter Mobile">
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile_2') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Email') }}</label>
                                            <input type="email" name="email" value="{{ old('email') }}"
                                                class="form-control" placeholder="Enter Email">
                                            @if ($errors->has('email'))
                                                <small class="text text-danger">{{ $errors->first('email') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Image') }}</label>
                                            <input type="file" name="image" value="{{ old('image') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('image'))
                                                <small class="text text-danger">{{ $errors->first('image') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Description') }}</label>
                                            <textarea class="form-control" name="description" rows="3"
                                                placeholder="Enter Description">{{ old('description') }}</textarea>
                                            @if ($errors->has('description'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('description') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-sm-12">
                                        <input type="submit" class="btn btn-block btn-success btn-flat"
                                            value="{{ translate('Save') }}" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
@stop
@section('custom_script')

@stop
