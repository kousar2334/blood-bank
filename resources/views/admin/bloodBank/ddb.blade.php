@extends('admin.layouts.main')
@section('admin-page-title')
    Admin | Blood Donor's list
@stop
@section('custom_css')
    <!-- DataTables -->
    {{-- <link rel="stylesheet" href="{{ asset('public/backend/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}"> --}}
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css">
    {{-- <link rel="stylesheet"
        href="{{ asset('public/backend/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}"> --}}
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <div class="content-header pb-1 pt-2">
        <div class="container-fluid">
            <div class="row mb-1">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">Blood Donors</h4>
                    <ol class="breadcrumb float-sm-left">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item active">Blood Bank</li>
                        <li class="breadcrumb-item active">Blood Donors</li>
                    </ol>
                </div><!-- /.col -->
                <div class="col-sm-6">

                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Blood Donor's List</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="donor_list" class="table table-bordered table-striped dataTable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Blood Group</th>
                                        <th>Mobile</th>
                                        <th>Mobile 2</th>
                                        <th>Address</th>
                                        <th>status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                        $counter = 0;
                                    @endphp
                                    @foreach ($donors as $bg)
                                        @php
                                            $counter++;
                                        @endphp
                                        <tr>
                                            <td>{{ $counter }}</td>
                                            <td>
                                                @if ($bg->image)
                                                    <img src="{{ asset('/') }}public/{{ $bg->image }}"
                                                        class="img-circle elevation-1" width="50" height="50">
                                                @else
                                                    <img src="{{ asset('/public/backend/static/user/user1.png') }}"
                                                        class="img-circle elevation-1" alt="User Image" width="50"
                                                        height="50">
                                                @endif
                                            </td>
                                            <td>{{ $bg->name }}</td>
                                            <td>{{ $bg->group['name'] }}</td>
                                            <td>{{ $bg->mobile }}</td>
                                            <td>{{ $bg->mobile2 }}</td>
                                            <td>{{ $bg->address }}</td>
                                            <td>
                                                @if ($bg->status == 1)
                                                    <p class="badge badge-success">Active</p>
                                                @else
                                                    <p class="badge badge-danger">Inactive</p>
                                                @endif
                                            </td>
                                            <td class="text-right text-white">
                                                <a href="#" data-id="{{ $bg->id }}"
                                                    class="btn btn-sm btn-info edit-info"><i class="fas fa-edit"></i></a>
                                                <div
                                                    class="del-modal <?php echo 'modal' . $bg->id; ?>">
                                                    <p><b>Record delete confirmation.</b></p>
                                                    <p>Are you want to really delete ?</p>

                                                    <button
                                                        class="btn btn-info py-1 del-close float-left delete-model-cansel-btn">Cancel</button>
                                                    <form method="post" action="{{ route('admin.blood.donar.delete') }}"
                                                        style="float:right;">
                                                        @csrf
                                                        <input type="hidden" name="id" value="{{ $bg->id }}">
                                                        <button class="btn btn-danger py-1">Confirm</button>
                                                    </form>
                                                </div>
                                                <a href="#" class="btn btn-sm btn-danger"
                                                    onclick="displayDeleteModal({{ $bg->id }})" title="Delete Item">
                                                    <i class="fas fa-trash"></i></a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
        <div class="modal fade" id="edit-donor-modal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Update Donor Information</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form role="form" action="{{ route('admin.blood.donar.store') }}" method="POST"
                            enctype="multipart/form-data">
                            @csrf
                            <div class="p-3">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Name<span class="text-danger">*</span></label>
                                            <input type="text" name="name" id="name" value="{{ old('name') }}"
                                                class="form-control" placeholder="Enter Name">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Blood Group<span class="text-danger">*</span></label>
                                            <select class="form-control" name="blood_group"
                                                value="{{ old('blood_group') }}">
                                                @foreach ($groups as $bg)
                                                    <option value="{{ $bg->id }}">{{ $bg->name }}</option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('blood_group'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('blood_group') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Mobile<span class="text-danger">*</span></label>
                                            <input type="number" name="mobile" value="{{ old('mobile') }}"
                                                class="form-control" placeholder="Enter Mobile">
                                            @if ($errors->has('mobile'))
                                                <small class="text text-danger">{{ $errors->first('mobile') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-12">
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
                                    <div class="col-sm-12">
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
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label id="image_label">Image</label>
                                            <input type="file" name="image" value="{{ old('image') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('image'))
                                                <small class="text text-danger">{{ $errors->first('image') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea class="form-control" id="address" name="addres" rows="3"
                                                placeholder="Enter Address">{{ old('addres') }}</textarea>
                                            @if ($errors->has('address'))
                                                <small class="text text-danger">{{ $errors->first('address') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Status<span class="text-danger">*</span></label>
                                            <select class="form-control" name="status" value="{{ old('status') }}">
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                            @if ($errors->has('blood_group'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('blood_group') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <p class="btn btn-default" data-dismiss="modal">Close</p>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                    </form>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
    </section>
    <!-- /.content -->

@stop
@section('custom_script')
    <!-- jQuery -->
    <script src="//code.jquery.com/jquery.js"></script>
    <!-- DataTables -->
    <script src="//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script>
    <!-- Bootstrap JavaScript -->
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <!--data table-->
    {{-- <script src="{{ asset('public/backend/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('public/backend/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('public/backend/plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('public/backend/plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script> --}}
    <script>
        $(function() {
            $('#donor_list').DataTable({
                "paging": true,
                "lengthChange": true,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": false,
                "responsive": true,
            });
        });

    </script>
    <script>
        $(document).ready(function() {
            $(".del-close").click(function() {
                $(".del-modal").hide('fadeIn');

            });
        });
        //delete record modal open
        function displayDeleteModal(id) {
            $(".del-modal").hide('fadeIn');
            $(".modal" + id).show('fadeOut');
        }
        //edit product
        $(".edit-info").click(function() {
            var id = $(this).data('id');
            //ajax
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: "{{ route('admin.blood.donar.edit') }}",
                type: "POST",
                data: {
                    'id': id
                },
                //dataType:'json',
                success: function(data) {
                    console.log(data);
                    if (data.success) {
                        $("input[name='name']").val(data.donor.name);
                        $("input[name='mobile']").val(data.donor.mobile);
                        $("input[name='mobile_2']").val(data.donor.mobile2);
                        $("input[name='email']").val(data.donor.email);
                        $("textarea#address").val(data.donor.address);
                        $('select[name="blood_group"]').val(data.donor.blood_group);
                        $('select[name="status"]').val(data.donor.status);
                        var imaggeLabel = "";
                        if (data.donor.image) {
                            imaggeLabel = 'Change Image';
                        } else {
                            imaggeLabel = 'Add Image';
                        }
                        $("#image_label").html(imaggeLabel);
                        console.log(data.donor.name);
                        $("#edit-donor-modal").modal('show');
                    } else {
                        toastr.error("Something went Wrong, Please Try again.");
                    }
                    // 	$(".modal-data").html(data);
                },
                error: function() {
                    toastr.error("Something went Wrong, Please Try again.");
                }
            });

            //end ajax
        });

    </script>
@stop
