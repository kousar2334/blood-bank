<aside class="main-sidebar elevation-4 sidebar-dark-maroon">
    <!-- Brand Logo -->
    <a href="{{ route('admin.dashboard') }}" class="brand-link navbar-secondary">
        @if ($siteInfo->logo != null)
            <img src="{{ asset('/') }}{{ $siteInfo->logo }}" alt="Logo" class="brand-image">
        @else
            <span class="brand-text bangla-font font-weight-light text-center"> {{ $siteInfo->site_name }}</span>
        @endif

    </a>
    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                @if (!empty(Auth::user()->image))
                    <img src="{{ asset(Auth::user()->image) }}" class="img-circle elevation-2" alt="User Image">
                @else
                    <img src="{{ asset('/static/images/no-image.png') }}" class="img-circle elevation-2"
                        alt="User Image">
                @endif

            </div>
            <div class="info">
                <a href="#" class="d-block">{{ Auth::user()->first_name }} {{ Auth::user()->last_name }}</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent nav-legacy" data-widget="treeview"
                role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a href="{{ route('admin.dashboard') }}"
                        class="{{ Request::routeIs('admin.dashboard') ? 'active ' : '' }} nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            {{ translate('Dashboard') }}
                        </p>
                    </a>
                </li>
                <!--Start Blood Bank Module-->
                <li
                    class="{{ Request::routeIs(['admin.blood.group.list', 'admin.blood.donar.add', 'admin.blood.group.add', 'admin.blood.group.edit', 'admin.blood.donar.add', 'admin.blood.donar.list', 'admin.blood.donar.edit']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs(['admin.blood.group.list', 'admin.blood.donar.add', 'admin.blood.group.add', 'admin.blood.group.edit', 'admin.blood.donar.add', 'admin.blood.donar.list']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-burn"></i>
                        <p>
                            {{ translate('Blood Bank') }}
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.donar.list') }}"
                                class="{{ Request::routeIs('admin.blood.donar.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Blood Donors') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.donar.add') }}"
                                class="{{ Request::routeIs('admin.blood.donar.add') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Add New Donor') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs('admin.blood.group.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Blood Groups') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.add') }}"
                                class="{{ Request::routeIs('admin.blood.group.add') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Add Blood Group') }}</p>
                            </a>
                        </li>

                    </ul>
                </li>
                <!--End blood bank Module-->
                <!--Hospital Module-->
                <li
                    class="{{ Request::routeIs(['admin.hospital.list', 'admin.hospital.add', 'admin.hospital.category.add', 'admin.hospital.category.list', 'admin.hospital.category.edit', 'admin.hospital.edit']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs(['admin.hospital.category.add', 'admin.hospital.category.list']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-hospital"></i>
                        <p>
                            {{ translate('Hospital & Clinic') }}
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.hospital.list') }}"
                                class="{{ Request::routeIs('admin.hospital.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p> {{ translate('Hospital & Clinic') }} </p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.hospital.add') }}"
                                class="{{ Request::routeIs('admin.hospital.add') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Add New Hospital') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.hospital.category.list') }}"
                                class="{{ Request::routeIs('admin.hospital.category.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Hospitals Categories') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.hospital.category.add') }}"
                                class="{{ Request::routeIs('admin.hospital.category.add') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Add New Category') }}</p>
                            </a>
                        </li>

                    </ul>
                </li>
                <!--End Hospital Module-->
                <!--Doctor Module-->
                <li
                    class="{{ Request::routeIs(['admin.doctor.category.add', 'admin.doctor.category.list', 'admin.doctor.category.edit', 'admin.doctor.add', 'admin.doctor.list', 'admin.doctor.edit']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs(['admin.doctor.category.add', 'admin.doctor.category.list', 'admin.doctor.category.edit', 'admin.doctor.add', 'admin.doctor.list', 'admin.doctor.edit']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-user-md"></i>
                        <p>
                            {{ translate('Doctors') }}
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.doctor.list') }}"
                                class="{{ Request::routeIs('admin.doctor.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p> {{ translate('Doctors') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.doctor.add') }}"
                                class="{{ Request::routeIs('admin.doctor.add') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('New Doctor') }}</p>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="{{ route('admin.doctor.category.list') }}"
                                class="{{ Request::routeIs('admin.doctor.category.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Departments') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.doctor.category.add') }}"
                                class="{{ Request::routeIs('admin.doctor.category.add') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('New Department') }}</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Doctor Module-->

                <!--Ambulance Module-->
                <li
                    class="{{ Request::routeIs(['admin.ambulance.category.add', 'admin.ambulance.category.list', 'admin.ambulance.category.edit', 'admin.ambulance.add', 'admin.ambulance.all', 'admin.ambulance.edit']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs([]) ? 'active' : 'admin.ambulance.category.add', 'admin.ambulance.category.list', 'admin.ambulance.category.edit', 'admin.ambulance.add', 'admin.ambulance.all', 'admin.ambulance.edit' }} nav-link">
                        <i class="nav-icon fas fa-ambulance"></i>
                        <p>
                            {{ translate('Ambulances') }}
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.ambulance.all') }}"
                                class="{{ Request::routeIs('admin.ambulance.all') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p> {{ translate('Ambulances') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.ambulance.add') }}"
                                class="{{ Request::routeIs('admin.ambulance.add') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p> {{ translate('New Ambulance') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.ambulance.category.list') }}"
                                class="{{ Request::routeIs('admin.ambulance.category.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p> {{ translate('Ambulance Categories') }} </p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.ambulance.category.add') }}"
                                class="{{ Request::routeIs('admin.ambulance.category.add') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('New Category') }}</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Ambulance Module-->
                <!--Fire Service Module-->
                <li
                    class="{{ Request::routeIs(['admin.fireservice.add', 'admin.fireservice.list', 'admin.fireservice.edit']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs(['admin.fireservice.add', 'admin.fireservice.list', 'admin.fireservice.edit']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-shower"></i>
                        <p>
                            {{ translate('Fire Services') }}
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.fireservice.list') }}"
                                class="{{ Request::routeIs('admin.fireservice.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Fire Stations') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.fireservice.add') }}"
                                class="{{ Request::routeIs('admin.fireservice.add') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Add Fire Stations') }}</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Fire Service Module-->
                <!--Police Stations Module-->
                <li
                    class="{{ Request::routeIs(['admin.police.add', 'admin.police.list', 'admin.police.edit']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs(['admin.police.add', 'admin.police.list', 'admin.police.edit']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-motorcycle"></i>
                        <p>
                            {{ translate('Police Stations') }}
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.police.list') }}"
                                class="{{ Request::routeIs('admin.police.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Police Stations') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.police.add') }}"
                                class="{{ Request::routeIs('admin.police.add') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Add Police Stations') }}</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Police Stations Module-->
                <!--Media Manager-->
                <li
                    class="{{ Request::routeIs(['admin.media.manager']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="{{ route('admin.media.manager') }}"
                        class="{{ Request::routeIs(['admin.media.manager']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-file-image"></i>
                        <p>
                            {{ translate('Media') }}
                        </p>
                    </a>
                </li>
                <!--End Media Manager-->
                <!--Projects Module-->
                <li
                    class="{{ Request::routeIs(['admin.project.edit', 'admin.project.new', 'admin.project.list', 'admin.police.edit']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs(['admin.project.edit', 'admin.project.new', 'admin.project.list', 'admin.police.edit']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-handshake"></i>
                        <p>
                            {{ translate('Projects') }}
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.project.list') }}"
                                class="{{ Request::routeIs('admin.project.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p> {{ translate('Projects List') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.project.new') }}"
                                class="{{ Request::routeIs('admin.project.new') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Create New Project') }}</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Projects Module-->

                <!--Setting Module-->
                <li
                    class="{{ Request::routeIs(['admin.language.edit', 'admin.language.edit.key.value', 'admin.language.new', 'admin.language.list', 'admin.settings.general', 'admin.settings.general.about.us', 'admin.settings.social.acconts.list', 'admin.settings.seo', 'admin.settings.themes']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs(['admin.language.edit', 'admin.language.edit.key.value', 'admin.language.new', 'admin.language.list', 'admin.settings.general', 'admin.settings.general.about.us', 'admin.settings.social.acconts.list', 'admin.settings.seo', 'admin.settings.themes']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-cog"></i>
                        <p>
                            {{ translate('Settings') }}
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.settings.general') }}"
                                class="{{ Request::routeIs('admin.settings.general') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('General') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.settings.general.about.us') }}"
                                class="{{ Request::routeIs('admin.settings.general.about.us') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('About Us') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.settings.social.acconts.list') }}"
                                class="{{ Request::routeIs('admin.settings.social.acconts.list') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Social Accounts') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.settings.seo') }}"
                                class="{{ Request::routeIs('admin.settings.seo') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Seo') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.settings.themes') }}"
                                class="{{ Request::routeIs('admin.settings.themes') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Themes') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.language.list') }}"
                                class="{{ Request::routeIs(['admin.language.edit', 'admin.language.edit.key.value', 'admin.language.list']) ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Languages') }} </p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Setting Module-->
                <!--Users Module-->
                <li
                    class="{{ Request::routeIs(['admin.user.new.user', 'admin.users', 'admin.user.edit']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs(['admin.user.new.user', 'admin.users', 'admin.user.edit']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-users"></i>
                        <p>
                            {{ translate('Users') }}
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.users') }}"
                                class="{{ Request::routeIs('admin.users') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('Users') }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.user.new.user') }}"
                                class="{{ Request::routeIs('admin.user.new.user') ? 'active ' : '' }} nav-link">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                <p>{{ translate('New Users') }}</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Users Module-->
                <!--Addon Manager-->
                <li
                    class="{{ Request::routeIs(['admin.project.edit', 'admin.project.new', 'admin.project.list', 'admin.police.edit']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs(['admin.project.edit', 'admin.project.new', 'admin.project.list', 'admin.police.edit']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-hammer"></i>
                        {{-- <i class="fa-solid fa-hammer"></i> --}}
                        <p>
                            {{ translate('Addon Manager') }}
                        </p>
                    </a>
                </li>
                <!--End Addon Manager-->
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
