@extends('admin.layouts.main')
@section('admin-page-title')
    Add Blood Donor | Blood Bank
@stop
@section('custom_css')
    <!-- DataTables -->
    <link rel="stylesheet" href="{{ asset('public/backend/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('public/backend/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <div class="content-header pb-1 pt-2">
        <div class="container-fluid">
            <div class="row mb-1">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">Add Blood Donor</h4>
                    <ol class="breadcrumb float-sm-left">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('admin.blood.group.list') }}">Blood Bank</a></li>
                        <li class="breadcrumb-item active">Add New Blood Donor</li>
                    </ol>
                </div><!-- /.col -->
                <div class="col-sm-6">

                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">

                <div class="col-lg-12 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Blood Donor Form</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.blood.donar.store') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name<span class="text-danger">*</span></label>
                                            <input type="text" name="name" value="{{ old('name') }}" class="form-control"
                                                placeholder="Enter Name">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Blood Group<span class="text-danger">*</span></label>
                                            <select class="form-control" name="blood_group"
                                                value="{{ old('blood_group') }}">
                                                @foreach ($b_groups as $bg)
                                                    <option value="{{ $bg->id }}">{{ $bg->name }}</option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('blood_group'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('blood_group') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Mobile<span class="text-danger">*</span></label>
                                            <input type="number" name="mobile" value="{{ old('mobile') }}"
                                                class="form-control" placeholder="Enter Mobile">
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Mobile 2</label>
                                            <input type="number" name="mobile_2" value="{{ old('mobile_2') }}"
                                                class="form-control" placeholder="Enter Mobile">
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile_2') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" name="email" value="{{ old('email') }}"
                                                class="form-control" placeholder="Enter Email">
                                            @if ($errors->has('email'))
                                                <small class="text text-danger">{{ $errors->first('email') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Image</label>
                                            <input type="file" name="image" value="{{ old('image') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('image'))
                                                <small class="text text-danger">{{ $errors->first('image') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea class="form-control" name="addres" rows="3"
                                                placeholder="Enter Address">{{ old('addres') }}</textarea>
                                            @if ($errors->has('address'))
                                                <small class="text text-danger">{{ $errors->first('address') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <input type="submit" class="btn btn-block btn-success btn-flat" value="Save" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </section>
    <!-- /.content -->

@stop
@section('custom_script')

@stop
