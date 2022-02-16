@extends('admin.layouts.main')
@section('admin-page-title')
    Edit Doctor's Department
@stop
@section('custom_css')
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 col-lg-6 col-md-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Update Doctor's Department</h3>
                            <a href="{{ route('admin.doctor.list') }}"
                                class="btn btn-info btn-sm float-right text-white">All Doctors</a>
                            <a href="{{ route('admin.doctor.add') }}"
                                class="mr-2 btn btn-success btn-sm float-right text-white">Add New Doctor</a>
                            <a href="{{ route('admin.doctor.category.list') }}"
                                class="mr-2 btn btn-danger btn-sm float-right text-white">All Departments</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body row">
                            <form role="form" action="{{ route('admin.doctor.category.update') }}" method="POST"
                                class="col-md-12" enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" name="name" class="form-control" placeholder="Enter ..."
                                                value="{{ $doctor_category->name }}">
                                            <input type="hidden" name="id" value="{{ $doctor_category->id }}">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name (Bangla)</label>
                                            <input type="text" name="bn_name" value="{{ $doctor_category->bn_name }}"
                                                class="form-control" placeholder="Enter ...">
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Icon</label>
                                            <input type="file" name="icon" value="{{ old('icon') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('icon'))
                                                <small class="text text-danger">{{ $errors->first('icon') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
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
                                    <div class="col-sm-12">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Description</label>
                                            <textarea class="form-control" name="description" rows="3"
                                                placeholder="Enter ...">{{ $doctor_category->name }}</textarea>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select class="form-control" name="status">
                                                <option {{ $doctor_category->status == '1' ? 'selected' : '' }}
                                                    value="1">
                                                    Active</option>
                                                <option {{ $doctor_category->status == '0' ? 'selected' : '' }}
                                                    value="0">
                                                    Inactive</option>

                                            </select>

                                            @if ($errors->has('status'))
                                                <small class="text text-danger">{{ $errors->first('status') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input type="submit" class="btn btn-block bg-gradient-success"
                                            value="Update Category" />
                                    </div>

                                </div>
                            </form>
                            {{-- <div class="offset-lg-1 col-lg-5">
                              Image
                            </div> --}}
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
