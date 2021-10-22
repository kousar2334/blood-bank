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
                                        <!-- text input -->
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
                                        <!-- text input -->
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

                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <!-- text input -->
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
                                        <!-- text input -->
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
                                        <!-- text input -->
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
                                        <!-- text input -->
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
                                </div>
                                <div class="row">

                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>মোবাইল</label>
                                            <textarea class="form-control" name="mobile" rows="4"
                                                placeholder="Enter Mobile">{{ $doc_info->mobile }}</textarea>
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>বিএমডিসি রেজি. নং:</label>
                                            <textarea class="form-control" name="bmdc_no" rows="4"
                                                placeholder="Enter BMDC No">{{ $doc_info->bmdc_no }}</textarea>
                                            @if ($errors->has('bmdc_no'))
                                                <small class="text text-danger">{{ $errors->first('bmdc_no') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>চেম্বার:</label>
                                            @foreach ($doc_info->chambers as $chamber)
                                                <textarea class="form-control mb-4" name="chamber[]" rows="5">
                                                                                    {{ $chamber->chamber }}
                                                                                </textarea>
                                            @endforeach

                                            <div id="newChamberInputFields">

                                            </div>

                                        </div>

                                        <span class="btn btn-info btn-sm text-white mb-5"
                                            onclick="createNewChamberInputFiled()"><span class="fas fa-plus"></span> New
                                            Chamber</span>
                                    </div>
                                    <div class="col-sm-6">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>ছবি</label>
                                            <br>
                                            <input type="file" name="image">
                                            @if ($errors->has('image'))
                                                <small class="text text-danger">{{ $errors->first('image') }}</small>
                                            @endif
                                        </div>
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
    <script type="text/JavaScript">
        //Add new chamber field
                                                                                                                                        function createNewChamberInputFiled() {
                                                                                                                                                                      var txtNewInputBox = document.createElement('div');
                                                                                                                                                                        txtNewInputBox.innerHTML = '<br><span class="fas fa-times remove-btn" onclick="removeInput(this)"></span><textarea class="form-control" name="chamber[]" placeholder="চেম্বারের নাম,&#10ঠিকানা,&#10রোগী দেখার সময় ও সিরিয়াল দেয়ার নাম্বার লিখুন " rows="4">'
                                                                                                                                                                                                                                        '</textarea>';
                                                                                                                                                                        document.getElementById("newChamberInputFields").appendChild(txtNewInputBox);
                                                                                                                                                                                                                                                           
                                                                                                                                                                     }
                                                                                                                                        //remove chamber input filed                             
                                                                                                                                        function removeInput(element){
                                                                                                                                        element.closest("div").remove();
                                                                                                                                        }
                                                                                                                                        
                        </script>
@stop
