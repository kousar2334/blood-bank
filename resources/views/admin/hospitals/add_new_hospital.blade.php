@extends('admin.layouts.main')
@section('admin-page-title')
    Add New Hospital
@stop
@section('custom_css')
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">New Hospital</h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('admin.blood.donar.list') }}">Hospitals & Clinic</a></li>
                        <li class="breadcrumb-item active">New Hospital</li>
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
                            <h3 class="card-title">Hospital's Form</h3>
                            <a href="{{ route('admin.hospital.list') }}" class="btn btn-info btn-sm float-right text-white">Hospital's List</a>
                            <a href="{{ route('admin.hospital.category.add') }}" class="btn btn-danger btn-sm float-right text-white mr-3">Add New Category</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.hospital.store') }}" method="POST"
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
                                            <label>Bangla Name</label>
                                            <input type="text" name="bn_name" value="{{ old('bn_name') }}" class="form-control"
                                                placeholder="Enter Bangla Name">
                                            @if ($errors->has('bn_name'))
                                                <small class="text text-danger">{{ $errors->first('bn_name') }}</small>
                                            @endif

                                        </div>
                                    </div>
                                </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <!-- text input -->
                                            <div class="form-group">
                                                <label>Category<span class="text-danger">*</span></label>
                                                <select class="form-control" name="cat_id"
                                                    value="{{ old('cat_id') }}">
                                                    @foreach ($hos_cats as $cat)
                                                        <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                                    @endforeach
                                                </select>
                                                @if ($errors->has('cat_id'))
                                                    <small
                                                        class="text text-danger">{{ $errors->first('cat_id') }}</small>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <!-- text input -->
                                            <div class="form-group">
                                                <label>Phone</label>
                                                <input type="number" name="phone" value="{{ old('phone') }}"
                                                    class="form-control" placeholder="Enter Phone">
                                                @if ($errors->has('phone'))
                                                    <small class="text text-danger">{{ $errors->first('phone') }}</small>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Mobile<span class="text-danger">*</span></label>
                                            <input type="number" name="mobile_1" value="{{ old('mobile_1') }}"
                                                class="form-control" placeholder="Enter Mobile">
                                            @if ($errors->has('mobile_1'))
                                                <small class="text text-danger">{{ $errors->first('mobile_1') }}</small>
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
                                    <div class="col-sm-6">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Description</label>
                                            <textarea class="form-control" name="description" rows="3"
                                                placeholder="Enter Description">{{ old('description') }}</textarea>
                                            @if ($errors->has('description'))
                                                <small class="text text-danger">{{ $errors->first('description') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea class="form-control" name="address" rows="3"
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
