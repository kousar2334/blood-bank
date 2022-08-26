@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Edit User') }}
@stop
@section('custom_css')
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Update Basic Information') }}</h3>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.user.update') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>{{ translate('First Name') }}<span
                                                    class="text-danger">*</span></label>
                                            <input type="hidden" name="id" value="{{ $user_info->id }}">
                                            <input type="text" name="first_name" class="form-control"
                                                value="{{ $user_info->first_name }}" placeholder=" Enter First Name">
                                            @if ($errors->has('first_name'))
                                                <small class="text text-danger">{{ $errors->first('first_name') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Last Name') }}</label>
                                            <input type="text" name="last_name" class="form-control"
                                                value="{{ $user_info->last_name }}" placeholder=" Enter Last Name">
                                            @if ($errors->has('last_name'))
                                                <small class="text text-danger">{{ $errors->first('last_name') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Email') }}</label>
                                            <input type="email" name="email" class="form-control"
                                                value="{{ $user_info->email }}" placeholder=" Enter Email">
                                            @if ($errors->has('email'))
                                                <small class="text text-danger">{{ $errors->first('email') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Mobile') }}</label>
                                            <input type="text" name="mobile" class="form-control"
                                                value="{{ $user_info->mobile }}" placeholder=" Enter Mobile">
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Image') }}</label>
                                            <input type="file" name="image" class="form-control">
                                            @if ($errors->has('image'))
                                                <small class="text text-danger">{{ $errors->first('image') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Status') }}</label>
                                            <select class="form-control" name="status">
                                                <option {{ $user_info->status == '1' ? 'selected' : '' }} value="1">
                                                    {{ translate('Active') }}
                                                </option>
                                                <option {{ $user_info->status == '0' ? 'selected' : '' }} value="0">
                                                    {{ translate('Inactive') }}
                                                </option>
                                            </select>
                                            @if ($errors->has('status'))
                                                <small class="text text-danger">{{ $errors->first('status') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input type="submit" class="btn btn-block btn-success btn-flat"
                                            value="{{ translate('Update') }}" />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div class="col-lg-6 col-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Update Password') }}</h3>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.user.update.password') }}" method="POST">
                                @csrf
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>{{ translate('New Password') }}</label>
                                            <input type="hidden" name="id" value="{{ $user_info->id }}" readonly>
                                            <input type="password" name="password" class="form-control"
                                                value="{{ old('password') }}" placeholder=" Enter Password">
                                            @if ($errors->has('password'))
                                                <small class="text text-danger">{{ $errors->first('password') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Conform Password') }}</label>
                                            <input type="password" name="password_confirmation" class="form-control"
                                                placeholder="Confirm Password">
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input type="submit" class="btn btn-block btn-success btn-flat"
                                            value="{{ translate('Update Password') }}" />
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
