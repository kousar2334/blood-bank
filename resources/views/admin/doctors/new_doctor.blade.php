@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('New Doctor') }}
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
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('New Doctor') }}</h3>
                            <a href="{{ route('admin.doctor.list') }}"
                                class="btn btn-success btn-sm float-right text-white"><i class="fas fa-user-md"> </i>
                                {{ translate('All Doctors') }}
                            </a>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.doctor.store') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <input type="hidden" name="status" value="1">
                                    <input type="hidden" name="end" value="web">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}<span class="text-danger">*</span></label>
                                            <input type="text" name="name" value="{{ old('name') }}"
                                                class="form-control" placeholder="Enter Name">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}</label>
                                            <input type="text" name="en_name" value="{{ old('name') }}"
                                                class="form-control" placeholder="Enter Name">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>{{ translate('Department') }}<span
                                                    class="text-danger">*</span></label>
                                            <select class="form-control" name="department"
                                                value="{{ old('department') }}">
                                                @foreach ($specializations as $sp)
                                                    <option value="{{ $sp->id }}">{{ $sp->name }}</option>
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
                                            <label>{{ translate('BMDC No.') }}</label>
                                            <input type="text" class="form-control" name="bmdc_no"
                                                placeholder="Enter BMDC No">{{ old('bmdc_no') }}</input>
                                            @if ($errors->has('bmdc_no'))
                                                <small class="text text-danger">{{ $errors->first('bmdc_no') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>{{ translate('Qualification') }}<span
                                                    class="text-danger">*</span></label>
                                            <textarea class="form-control" name="qualification" rows="4"
                                                placeholder="Enter Qualification">{{ old('qualification') }}</textarea>
                                            @if ($errors->has('qualification'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('qualification') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>{{ translate('Designation') }}</label>
                                            <textarea class="form-control" name="position" rows="4"
                                                placeholder="Enter Position">{{ old('position') }}</textarea>
                                            @if ($errors->has('position'))
                                                <small class="text text-danger">{{ $errors->first('position') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>{{ translate('Specialist') }}</label>
                                            <textarea class="form-control" name="specialist" rows="4"
                                                placeholder="Enter Specialist">{{ old('specialist') }}</textarea>
                                            @if ($errors->has('specialist'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('specialist') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>{{ translate('Working Place') }}</label>
                                            <textarea class="form-control" name="working_place" rows="4"
                                                placeholder="Enter Working Place">{{ old('working_place') }}</textarea>
                                            @if ($errors->has('working_place'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('working_place') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>{{ translate('Mobile') }}</label>
                                            <textarea class="form-control" name="mobile" rows="4" placeholder="Enter Mobile">{{ old('mobile') }}</textarea>
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>{{ translate('Image') }}</label>
                                            <br>
                                            <input type="file" name="image">
                                            @if ($errors->has('image'))
                                                <small class="text text-danger">{{ $errors->first('image') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>{{ translate('Chamber') }}</label>
                                            <input type="text" name="chambers[0][chamber]" class="form-control mb-2"
                                                placeholder="চেম্বারের নাম">
                                            <textarea class="form-control mb-2" name="chambers[0][address]" placeholder="ঠিকানা" rows="4"></textarea>
                                            <textarea class="form-control mb-2" name="chambers[0][visiting_time]" placeholder="রোগী দেখার সময়" rows="4"></textarea>
                                            <textarea class="form-control" name="chambers[0][mobiles]" placeholder="সিরিয়াল দেয়ার নাম্বার লিখুন "
                                                rows="4"></textarea>
                                        </div>
                                        <div id="newChamberInputFields">
                                            <!--Dynamic chamber here-->
                                        </div>
                                        <span class="btn btn-info btn-sm text-white mb-5"
                                            onclick="createNewChamberInputFiled()"><span class="fas fa-plus"></span>
                                            {{ translate('New Chamber') }}
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group text-right mt-2">
                                    <input type="submit" class="btn btn-success" value="{{ translate('Save') }}" />
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
    <script>
        //Add new chamber field
        let counter = 0

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
