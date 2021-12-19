@extends('admin.layouts.main')
@section('admin-page-title')
    General Settings
@stop
@section('custom_css')
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">General Settings</h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('admin.blood.donar.list') }}">Settings</a></li>
                        <li class="breadcrumb-item active">General Settings</li>
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
                            <h3 class="card-title">General Settings</h3>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.settings.general.update') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Site Name<span class="text-danger">*</span></label>
                                            <input type="hidden" name="id" value="{{ $settings->id }}">
                                            <input type="text" name="site_name" value="{{ $settings->site_name }}"
                                                class="form-control" placeholder="Enter Site Name">
                                            @if ($errors->has('site_name'))
                                                <small class="text text-danger">{{ $errors->first('site_name') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Logo</label>
                                            <input type="file" name="logo" class="form-control">
                                            @if ($errors->has('logo'))
                                                <small class="text text-danger">{{ $errors->first('logo') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Favicon</label>
                                            <input type="file" name="favicon" class="form-control">
                                            @if ($errors->has('favicon'))
                                                <small class="text text-danger">{{ $errors->first('favicon') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input type="text" name="phone" value="{{ $settings->phone }}"
                                                class="form-control" placeholder="Enter Phone">
                                            @if ($errors->has('phone'))
                                                <small class="text text-danger">{{ $errors->first('phone') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Mobile</label>
                                            <input type="text" name="mobile" value="{{ $settings->mobile }}"
                                                class="form-control" placeholder="Enter Mobile">
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" name="email" value="{{ $settings->email }}"
                                                class="form-control" placeholder="Enter Email">
                                            @if ($errors->has('email'))
                                                <small class="text text-danger">{{ $errors->first('email') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea class="form-control" name="address" rows="3"
                                                placeholder="Enter Address">{{ $settings->address }}</textarea>
                                            @if ($errors->has('address'))
                                                <small class="text text-danger">{{ $errors->first('address') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="row">
                                            <div class="offset-lg-1 offset-md-1 col-11">
                                                <p class="mb-0">Logo</p>
                                                <img src="{{ asset('/') }}{{ $settings->logo }}" height="100px">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
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
