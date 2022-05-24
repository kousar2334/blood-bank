<nav class="main-header navbar navbar-expand navbar-white navbar-light border-bottom-0">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="{{ route('frontpage') }}" class="nav-link" target="_blank"><i class="fas fa-globe"></i></a>
        </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">

        <!--Language switcher-->
        @php
            if (Session::has('locale')) {
                $locale = Session::get('locale', Config::get('app.locale'));
            } else {
                $locale = 'en';
            }
            
        @endphp
        <li class="nav-item dropdown">
            <a class="nav-link text-uppercase" data-toggle="dropdown" href="#">
                {{ $locale }}
            </a>
            <div id="lang-change" class="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                @foreach ($active_langs as $lang)
                    <a href="#" class="dropdown-item" data-flag="{{ $lang->code }}"
                        @if ($locale == $lang->code) active @endif>
                        {{ $lang->name }}
                    </a>
                @endforeach
            </div>
        </li>
        <!--End Language switcher-->

        <!-- Messages Dropdown Menu -->
        {{-- <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="far fa-comments"></i>
                <span class="badge badge-danger navbar-badge">3</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" class="dropdown-item">
                    <!-- Message Start -->
                    <div class="media">
                        <img src="{{ asset('/backend/dist/img/user1-128x128.jpg') }}" alt="User Avatar"
                            class="img-size-50 mr-3 img-circle">
                        <div class="media-body">
                            <h3 class="dropdown-item-title">
                                Brad Diesel
                                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                            </h3>
                            <p class="text-sm">Call me whenever you can...</p>
                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                    </div>
                    <!-- Message End -->
                </a>
                <div class="dropdown-divider"></div>

                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
            </div>
        </li> --}}
        <!-- Notifications Dropdown Menu -->
        {{-- <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="far fa-bell"></i>
                <span class="badge badge-warning navbar-badge">15</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span class="dropdown-item dropdown-header">15 Notifications</span>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                    <span class="float-right text-muted text-sm">3 mins</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
        </li> --}}
        <!-- User manu -->
        <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <div class="image">
                    @if (!empty(Auth::user()->image))
                        <img src="{{ asset(Auth::user()->image) }}" class="img-circle elevation-2" width="30px"
                            alt="User Image">
                    @else
                        <img src="{{ asset('/static/images/no-image.png') }}" class="img-circle elevation-2"
                            alt="User Image">
                    @endif

                </div>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div class="dropdown-item">
                    <!-- Message Start -->
                    <div class="media">
                        @if (!empty(Auth::user()->image))
                            <img src="{{ asset(Auth::user()->image) }}" class="img-size-50 mr-3 img-circle"
                                alt="User Image">
                        @else
                            <img src="{{ asset('/static/images/no-image.png') }}" class="img-size-50 mr-3 img-circle"
                                alt="User Image">
                        @endif
                        <div class="media-body">
                            <h3 class="dropdown-item-title">
                                {{ Auth::user()->first_name }} {{ Auth::user()->last_name }}
                                <span class="float-right text-sm"><a href="#"><i class="fas fa-cog"></i></a></span>
                            </h3>
                            <p class="text-sm">{{ Auth::user()->email }}</p>
                            <a href="{{ route('admin.logout') }}" class="text-sm">
                                <i class="nav-icon fas fa-sign-out-alt"></i>Log out</a>
                        </div>
                    </div>
                    <!-- Message End -->
                </div>
                <div class="dropdown-divider"></div>
            </div>
        </li>

    </ul>
</nav>
<script>
    $('#lang-change .dropdown-item').each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var locale = $this.data('flag');
            console.log(locale);
            $.post('{{ route('admin.app.set.language') }}', {
                _token: '{{ csrf_token() }}',
                lang: locale
            }, function(data) {
                location.reload();
            });

        });
    });
</script>
