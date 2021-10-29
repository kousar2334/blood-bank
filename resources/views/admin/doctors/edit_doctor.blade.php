@extends('admin.layouts.main')
@section('admin-page-title')
    Edit Doctor | Doctors
@stop
@section('custom_css')
    <style>
        .remove-btn {
            color: white;
            background-color: red;
            position: absolute;
            border-radius: 50%;
            padding: 5px;
            right: 5px;
            cursor: pointer;
        }

    </style>
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">Add New Doctor</h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('admin.blood.donar.list') }}">Doctors</a></li>
                        <li class="breadcrumb-item active">Edit Doctor</li>
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
                            <h3 class="card-title">Edit Doctor</h3>
                            <a href="{{ route('admin.doctor.list') }}"
                                class="btn btn-danger btn-sm float-right text-white"><i class="fas fa-user-md"> </i>
                                All Doctors</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.doctor.update') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>নাম<span class="text-danger">*</span></label>
                                            <input type="hidden" name="id" value="{{ $doc_info->id }}">
                                            <input type="text" name="name" value="{{ $doc_info->name }}"
                                                class="form-control" placeholder="Enter Name">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>নাম<span class="text-danger">*</span></label>
                                            <input type="text" name="en_name" value="{{ $doc_info->en_name }}"
                                                class="form-control" placeholder="Enter Name">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>
                                    </div>
                                    <div class="col-sm-6">

                                        <div class="form-group">
                                            <label>বিভাগ<span class="text-danger">*</span></label>
                                            <select class="form-control" name="department">
                                                @foreach ($specializations as $sp)
                                                    <option {{ $doc_info->department == $sp->id ? 'selected' : '' }}
                                                        value="{{ $sp->id }}">{{ $sp->name }}
                                                    </option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('department'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('department') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">

                                        <div class="form-group">
                                            <label>বিএমডিসি রেজি. নং:</label>
                                            <input type="text" name="bmdc_no" value="{{ $doc_info->bmdc_no }}"
                                                class="form-control" placeholder="Enter BMDC No">
                                            @if ($errors->has('bmdc_no'))
                                                <small class="text text-danger">{{ $errors->first('bmdc_no') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">

                                        <div class="form-group">
                                            <label>ডিগ্রি<span class="text-danger">*</span></label>
                                            <textarea class="form-control" name="qualification" rows="4"
                                                placeholder="Enter Qualification">{{ $doc_info->qualification }}</textarea>
                                            @if ($errors->has('qualification'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('qualification') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-6">

                                        <div class="form-group">
                                            <label>পদবী</label>
                                            <textarea class="form-control" name="position" rows="4"
                                                placeholder="Enter Position">{{ $doc_info->position }}</textarea>
                                            @if ($errors->has('position'))
                                                <small class="text text-danger">{{ $errors->first('position') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">

                                        <div class="form-group">
                                            <label>কোন বিষয়ে বিশেষজ্ঞ</label>
                                            <textarea class="form-control" name="specialist" rows="4"
                                                placeholder="Enter Specialist">{{ $doc_info->specialist }}</textarea>
                                            @if ($errors->has('specialist'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('specialist') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">

                                        <div class="form-group">
                                            <label>কর্মস্থল</label>
                                            <textarea class="form-control" name="working_place" rows="4"
                                                placeholder="Enter Working Place">{{ $doc_info->working_place }}</textarea>
                                            @if ($errors->has('working_place'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('working_place') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">

                                        <div class="form-group">
                                            <label>মোবাইল</label>
                                            <textarea class="form-control" name="mobile" rows="4"
                                                placeholder="Enter Mobile">{{ $doc_info->mobile }}</textarea>
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile') }}</small>
                                            @endif
                                        </div>
                                    </div>


                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <label>স্ট্যাটাস</label>
                                            <select class="form-control" name="status">
                                                <option {{ $doc_info->status == '1' ? 'selected' : '' }} value="1">
                                                    Active</option>
                                                <option {{ $doc_info->status == '0' ? 'selected' : '' }} value="0">
                                                    Inactive</option>

                                            </select>
                                            @if ($errors->has('status'))
                                                <small class="text text-danger">{{ $errors->first('status') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <label>মেম্বার</label>
                                            <input type="text" name="is_featured" value="{{ $doc_info->is_featured }}"
                                                class="form-control">
                                            @if ($errors->has('is_featured'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('is_featured') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>চেম্বার:</label>
                                            @foreach ($doc_info->chambers as $chamber)
                                                <div>
                                                    <span class="fas fa-times remove-btn"
                                                        onclick="removeInput(this)"></span>
                                                    <input type="text" name="chambers[{{ $chamber->id }}][chamber]"
                                                        class="form-control mb-2 mt-4" value="{{ $chamber->chamber }}"
                                                        placeholder="চেম্বারের নাম">
                                                    <textarea class="form-control mb-2"
                                                        name="chambers[{{ $chamber->id }}][address]" placeholder="ঠিকানা"
                                                        rows="4">{{ $chamber->address }}</textarea>
                                                    <textarea class="form-control mb-2"
                                                        name="chambers[{{ $chamber->id }}][visiting_time]"
                                                        placeholder="রোগী দেখার সময়"
                                                        rows="4">{{ $chamber->visiting_time }}</textarea>
                                                    <textarea class="form-control"
                                                        name="chambers[{{ $chamber->id }}][mobiles]"
                                                        placeholder="সিরিয়াল দেয়ার নাম্বার লিখুন "
                                                        rows="4">{{ $chamber->mobiles }}</textarea>
                                                </div>


                                            @endforeach

                                            <div id="newChamberInputFields">

                                            </div>

                                        </div>

                                        <span class="btn btn-info btn-sm text-white mb-5"
                                            onclick="createNewChamberInputFiled()"><span class="fas fa-plus"></span> New
                                            Chamber</span>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>ছবি</label>
                                            <br>
                                            <input type="file" name="image">
                                            @if ($errors->has('image'))
                                                <small class="text text-danger">{{ $errors->first('image') }}</small>
                                            @endif
                                        </div>
                                        <img src="{{ asset('/') }}{{ $doc_info->image }}" width="120px">
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
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
    <script>
        let counter = 0
        //Add new chamber field
        function createNewChamberInputFiled() {
            counter = counter + 1;
            console.log(counter);
            var txtNewInputBox = document.createElement('div');
            txtNewInputBox.innerHTML =
                '<br><span class="fas fa-times remove-btn" onclick="removeInput(this)"></span><div class="form-group"> <input type="text" name="chambers[' +
                counter +
                '][chamber]" class="form-control mb-2" placeholder="চেম্বারের নাম"> <textarea class="form-control mb-2" name="chambers[' +
                counter +
                '][address]" placeholder="ঠিকানা" rows="4"></textarea><textarea class="form-control mb-2" name="chambers[' +
                counter +
                '][visiting_time]"placeholder="রোগী দেখার সময়" rows="4"></textarea> <textarea class="form-control" name="chambers[' +
                counter + '][mobiles]" placeholder="সিরিয়াল দেয়ার নাম্বার লিখুন " rows="4">'
            '</textarea></div>';
            document.getElementById("newChamberInputFields").appendChild(txtNewInputBox);

        }
        //remove chamber input filed                             
        function removeInput(element) {
            element.closest("div").remove();
        }
    </script>
@stop
