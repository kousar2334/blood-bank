@extends('admin.layouts.main')
@section('admin-page-title')
    Admin Dashboard-add New Blood Donor
@stop
@section('admin_content')
    <div class="row dashboard_container">
        <div class="col-12 dashboard_content">
            <div class="widget-box">
                <div class="widget-title">
                    <div class="row m-0">
                        <div class="col-md-6 pl-0 col-sm-12">
                            <h3 class="m-0">New Donor</h3>
                            <div class="breadcum">
                                <ul class="list-group list-group-horizontal">
                                    <li><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i> Dashboard</a>
                                    </li>
                                    <li><a>/ Blood Bank / </a></li>
                                    <li class="active"><a>New Donor</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                        </div>
                    </div>
                </div>
                <div class="widget-content pt-2">
                    <h4>Blood Donor Form</h4>
                    <div class="col-md-12 col-sm-12 p-4">

                        <form>
                            <div class="form-group row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="staticEmail" value="email@example.com">
                                    <small id="passwordHelpBlock" class="form-text text-muted">
                                        Your password must be 8-20 characters long, contain letters and numbers, and
                                        must
                                        not contain spaces, special characters, or emoji.
                                    </small>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Select Gender</label>
                                <div class="col-sm-10">
                                    <select class="form-control">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Radio</label>
                                <div class="col-sm-10">
                                    <select class="form-control">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <fieldset class="form-group">
                                <div class="row">
                                    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                                    <div class="col-sm-10">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio1" name="customRadio"
                                                class="custom-control-input">
                                            <label class="custom-control-label" for="customRadio1">Toggle this custom
                                                radio</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio"
                                                class="custom-control-input">
                                            <label class="custom-control-label" for="customRadio2">Or toggle this other
                                                custom radio</label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="form-group">
                                <div class="row">
                                    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline1" name="customRadioInline1"
                                            class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline1">Toggle this custom
                                            radio</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline2" name="customRadioInline1"
                                            class="custom-control-input">
                                        <label class="custom-control-label" for="customRadioInline2">Or toggle this other
                                            custom radio</label>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="form-group row">
                                <div class="col-sm-2">Checkbox</div>
                                <div class="col-sm-10">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1">
                                        <label class="form-check-label" for="gridCheck1">
                                            Example checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-2">File</div>
                                <div class="col-sm-10">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile">
                                        <label class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-2">Textarea</div>
                                <div class="col-sm-10">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="form-group row float-right">
                                <input type="submit" class="my-btn my-btn-lg" autocomplete="off" aria-pressed="false"
                                    value="Save">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

@stop
