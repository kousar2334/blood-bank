@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Volunteers') }}
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Volunteers') }}</h3>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered table-striped mb-3">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ translate('Image') }}</th>
                                        <th>{{ translate('Name') }}</th>
                                        <th>{{ translate('Phone') }}</th>
                                        <th>{{ translate('Email') }}</th>
                                        <th>{{ translate('Status') }}</th>
                                        <th class="text-center">{{ translate('Action') }}</th>
                                        <th class="text-right">{{ translate('Remove') }}</th>
                                    </tr>
                                </thead>
                                </thead>
                                <tbody>
                                    @php
                                        $counter = 0;
                                    @endphp
                                    @foreach ($volunteers as $volunteer)
                                        @php
                                            $counter++;
                                        @endphp
                                        <tr>
                                            <td>{{ $counter }}</td>
                                            <td>{{ $volunteer->image }}
                                            </td>
                                            <td>{{ $volunteer->name }}</td>
                                            <td>{{ $volunteer->phone }}</td>
                                            <td>{{ $volunteer->email }}</td>
                                            <td>
                                                @if ($volunteer->status == 1)
                                                    <p class="badge badge-success">{{ translate('Active') }}</p>
                                                @else
                                                    <p class="badge badge-danger">{{ translate('Inactive') }}</p>
                                                @endif
                                            </td>
                                            <td class="cursor-pointer text-center">
                                                <div class="btn-group">
                                                    <p class="mb-0" data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="fas fa-tasks"></i>
                                                    </p>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="#" class="dropdown-item" type="button">
                                                            {{ translate('Edit') }}
                                                        </a>
                                                        <a href="#" class="dropdown-item volunteer-secret-login"
                                                            data-id="{{ $volunteer->id }}">{{ translate('Secret Login') }}
                                                        </a>
                                                        <a href="#" class="dropdown-item" type="button">
                                                            {{ translate('Reset Password') }}
                                                        </a>
                                                    </div>
                                                </div>
                                            <td class="text-right">
                                                <form method="post" action="{{ route('admin.hospital.category.delete') }}"
                                                    style="float:right;">
                                                    @csrf
                                                    <input type="hidden" name="id" value="{{ $volunteer->id }}">
                                                    <button class="btn btn-sm ml-1 btn-circle danger-soft">
                                                        <i class="fas fa-trash-alt"></i>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>

                            <div class="d-flex justify-content-between flex-wrap">
                                <div>Showing {{ ($volunteers->currentpage() - 1) * $volunteers->perpage() + 1 }} to
                                    {{ $volunteers->currentpage() * $volunteers->perpage() }}
                                    of {{ $volunteers->total() }} entries
                                </div>

                                {!! $volunteers->withQueryString()->links('pagination::bootstrap-4') !!}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

@stop
@section('custom_script')
    <script>
        // $(document).ready(function() {
        //     $(".del-close").click(function() {
        //         $(".del-modal").hide('fadeIn');

        //     });
        // });

        // function displayDeleteModal(id) {
        //     $(".del-modal").hide('fadeIn');
        //     $(".modal" + id).show('fadeOut');
        // }

        /**
         * Customer secret login
         *
         **/
        $(".volunteer-secret-login").on('click', function(e) {
            e.preventDefault();
            let id = $(this).data('id');
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                },
                type: "POST",
                data: {
                    id: id
                },
                url: '{{ route('admin.volunteer.secret.login') }}',
                success: function(response) {
                    if (response.success) {
                        // localStorage.setItem("isLogin", JSON.stringify(true));
                        // localStorage.setItem("token", JSON.stringify(response.access_token));
                        // localStorage.setItem("auth_user", JSON.stringify(response.user));
                        // var url = "/dashboard";
                        // window.open(url, '_blank');
                    } else {
                        toastr.error('{{ translate('Login Failed ') }}');
                    }
                },
                error: function(response) {
                    toastr.error('{{ translate('Login Failed ') }}');
                }
            })
        });
    </script>
@stop
