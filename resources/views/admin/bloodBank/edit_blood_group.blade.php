@extends('admin.layouts.main')
@section('admin-page-title')
    Admin | Blood Bank- Add Groups
@stop
@section('custom_css')

@stop
@section('admin_content')
     <!-- Content Header (Page header) -->
     <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">Edit Blood Group</h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('admin.blood.donar.list') }}">Blood Bank</a></li>
                        <li class="breadcrumb-item active">Blood Donor Form</li>
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
                    <div class="card ">
                        <div class="card-header">
                            <h3 class="card-title">Update Blood Group Information</h3>
                            <a href="{{ route('admin.blood.group.list') }}" class="btn btn-info btn-sm float-right text-white">Blood Group's List</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.blood.group.update') }}" method="POST">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" name="name" value="{{ $bg_info->name }}" class="form-control"
                                                placeholder="Enter ...">
                                            <input type="hidden" name="id" value="{{ $bg_info->id }}">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name (Bangla)</label>
                                            <input type="text" name="bn_name" value="{{ $bg_info->bn_name }}"
                                                class="form-control" placeholder="Enter ...">
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Description</label>
                                            <textarea class="form-control" name="description" rows="3"
                                                placeholder="Enter ...">{{ $bg_info->description }}</textarea>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input type="submit" class="btn btn-block btn-success btn-flat" value="Update" />
                                    </div>

                                </div>
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
