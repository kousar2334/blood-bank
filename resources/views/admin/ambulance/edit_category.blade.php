@extends('admin.layouts.main')
@section('admin-page-title')
    Edit Ambulance Category
@stop
@section('custom_css')

@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 mt-4 col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="m-0 card-title">Update Ambulance Category</h3>
                            <a href="{{ route('admin.ambulance.all') }}"
                                class="btn btn-success btn-sm float-right text-white">Ambulance List</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body row">
                            <form role="form" action="{{ route('admin.ambulance.category.update') }}" method="POST"
                                class="col-lg-12">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="hidden" name="id" value="{{ $category->id }}">
                                            <input type="text" name="name" value="{{ $category->name }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name (Bangla)</label>
                                            <input type="text" name="bn_name" value="{{ $category->bn_name }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('bn_name'))
                                                <small class="text text-danger">{{ $errors->first('bn_name') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Description</label>
                                            <textarea class="form-control" name="description" rows="3"
                                                placeholder="Enter ...">{{ $category->description }}</textarea>
                                            @if ($errors->has('description'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('description') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select class="form-control" name="status">
                                                <option {{ $category->status == '1' ? 'selected' : '' }} value="1">
                                                    Active</option>
                                                <option {{ $category->status == '0' ? 'selected' : '' }} value="0">
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
