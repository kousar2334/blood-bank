@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Add New User') }}
@stop
@section('custom_css')
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 col-lg-6 col-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title"> {{ translate('Add New User') }}</h3>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.user.new.user.store') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>{{ translate('First Name') }}<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" name="first_name" class="form-control"
                                                value="{{ old('first_name') }}" placeholder=" Enter First Name">
                                            @if ($errors->has('first_name'))
                                                <small class="text text-danger">{{ $errors->first('first_name') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Last Name') }}</label>
                                            <input type="text" name="last_name" class="form-control"
                                                value="{{ old('last_name') }}" placeholder=" Enter Last Name">
                                            @if ($errors->has('last_name'))
                                                <small class="text text-danger">{{ $errors->first('last_name') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Email') }}</label>
                                            <input type="email" name="email" class="form-control"
                                                value="{{ old('email') }}" placeholder=" Enter Email">
                                            @if ($errors->has('email'))
                                                <small class="text text-danger">{{ $errors->first('email') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Mobile') }}</label>
                                            <input type="text" name="mobile" class="form-control"
                                                value="{{ old('mobile') }}" placeholder=" Enter Mobile">
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Username') }}</label>
                                            <input type="text" name="username" class="form-control"
                                                value="{{ old('username') }}" placeholder=" Enter Username">
                                            @if ($errors->has('username'))
                                                <small class="text text-danger">{{ $errors->first('username') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Password') }}</label>
                                            <input type="password" name="password" class="form-control"
                                                value="{{ old('password') }}" placeholder=" Enter Password">
                                            @if ($errors->has('password'))
                                                <small class="text text-danger">{{ $errors->first('password') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Confirm Password') }}</label>
                                            <input type="password" name="password_confirmation" class="form-control"
                                                placeholder="{{ translate('Confirm Password') }}">
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Image') }}</label>
                                            <input type="file" name="image" class="form-control">
                                            @if ($errors->has('image'))
                                                <small class="text text-danger">{{ $errors->first('image') }}</small>
                                            @endif
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input type="submit" class="btn btn-block btn-success btn-flat"
                                            value="{{ translate('Add New User') }}" />
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
