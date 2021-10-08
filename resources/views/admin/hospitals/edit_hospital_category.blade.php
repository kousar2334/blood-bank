@extends('admin.layouts.main')
@section('admin-page-title')
Edit Hospital Category
@stop
@section('custom_css')
  
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">Edit Hospital Category</h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('admin.blood.donar.list') }}">Hospitals & Clinic</a></li>
                        <li class="breadcrumb-item active">Edit Hospital Category</li>
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

                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Hospital Category Information</h3>
                            <a href="{{ route('admin.blood.donar.list') }}" class="btn btn-info btn-sm float-right text-white">Hospitals List</a>
                            <a href="{{ route('admin.hospital.category.list') }}" class="mr-2 btn btn-danger btn-sm float-right text-white">Hospital's Category List</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body row">
                            <form role="form" action="{{ route('admin.hospital.category.update') }}" method="POST"
                                class="col-md-6">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" name="name" value="{{ $item->name }}" class="form-control">
                                            <input type="hidden" name="id" value="{{ $item->id }}" class="form-control"
                                                placeholder="Enter ...">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name (Bangla)</label>
                                            <input type="text" name="bn_name" value="{{ $item->bn_name }}"
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
                                                placeholder="Enter ...">{{ $item->description }}</textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select class="form-control" name="status">
                                                <option {{ $item->status == '1' ? 'selected' : '' }} value="1">
                                                    Active</option>
                                                <option {{ $item->status == '0' ? 'selected' : '' }} value="0">
                                                    Inactive</option>

                                            </select>

                                            @if ($errors->has('status'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('status') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                
                                <div class="row">
                                    <div class="offset-md-6 col-sm-6">
                                        <input type="submit" class="btn btn-block bg-gradient-success" value="Update" />
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
