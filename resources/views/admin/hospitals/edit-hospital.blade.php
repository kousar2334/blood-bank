@extends('admin.layouts.main')
@section('admin-page-title')
    Edit Hospital
@stop
@section('custom_css')
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Update Hospital</h3>
                            <a href="{{ route('admin.hospital.list') }}"
                                class="btn btn-info btn-sm float-right text-white">Hospital's List</a>
                            <a href="{{ route('admin.hospital.add') }}"
                                class="btn btn-danger btn-sm float-right text-white mr-3">Add New Hospital</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.hospital.update') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name<span class="text-danger">*</span></label>
                                            <input type="text" name="name" value="{{ $hospital->name }}"
                                                class="form-control">
                                            <input type="hidden" name="id" value="{{ $hospital->id }}">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Bangla Name</label>
                                            <input type="text" name="bn_name" value="{{ $hospital->bn_name }}"
                                                class="form-control" placeholder="Enter Bangla Name">
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
                                            <select class="form-control" name="cat_id">
                                                @foreach ($hos_cats as $cat)
                                                    <option {{ $hospital->cat_id === $cat->id ? 'selected' : '' }}
                                                        value="{{ $cat->id }}">{{ $cat->bn_name }}
                                                    </option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('cat_id'))
                                                <small class="text text-danger">{{ $errors->first('cat_id') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input type="text" name="phone" value="{{ $hospital->phone }}"
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
                                            <input type="text" name="mobile_1" value="{{ $hospital->mobile_1 }}"
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
                                            <input type="text" name="mobile_2" value="{{ $hospital->mobile_2 }}"
                                                class="form-control" placeholder="Enter Mobile">
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile_2') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Web</label>
                                            <input type="text" name="web" value="{{ $hospital->web }}"
                                                class="form-control" placeholder="Enter Web address">
                                            @if ($errors->has('web'))
                                                <small class="text text-danger">{{ $errors->first('web') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Facebook Page</label>
                                            <input type="text" name="fb_link" value="{{ $hospital->fb_link }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('fb_link'))
                                                <small class="text text-danger">{{ $errors->first('fb_link') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" name="email" value="{{ $hospital->email }}"
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
                                                placeholder="Enter Description">{{ $hospital->description }}</textarea>
                                            @if ($errors->has('description'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('description') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea class="form-control" name="address" rows="3"
                                                placeholder="Enter Address">{{ $hospital->address }}</textarea>
                                            @if ($errors->has('address'))
                                                <small class="text text-danger">{{ $errors->first('address') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Featured</label>
                                            <input type="text" name="featured" value="{{ $hospital->featured }}"
                                                class="form-control" placeholder="Enter featured Number">
                                            @if ($errors->has('featured'))
                                                <small class="text text-danger">{{ $errors->first('featured') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select class="form-control" name="status">
                                                <option {{ $hospital->status == '1' ? 'selected' : '' }} value="1">
                                                    Active</option>
                                                <option {{ $hospital->status == '0' ? 'selected' : '' }} value="0">
                                                    Inactive</option>

                                            </select>

                                            @if ($errors->has('status'))
                                                <small class="text text-danger">{{ $errors->first('status') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input type="submit" class="btn btn-block btn-success btn-flat" value="Update" />
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
