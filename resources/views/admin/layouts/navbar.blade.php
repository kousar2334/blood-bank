<aside class="main-sidebar elevation-1 sidebar-dark-maroon">
    <!-- Brand Logo -->
    <a href="{{ route('admin.dashboard') }}" class="brand-link">
        <img src="{{ asset('public/backend/dist/img/AdminLTELogo.png') }}" alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">Amr Bogura</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                @if (!empty(Auth::user()->image))
                    <img src="{{ asset(Auth::user()->image) }}" class="img-circle elevation-2" alt="User Image">
                @else
                    <img src="{{ asset('public/backend/dist/img/user1-160x160.jpg') }}" class="img-circle elevation-2"
                        alt="User Image">
                @endif

            </div>
            <div class="info">
                <a href="#" class="d-block">{{ Auth::user()->first_name }} {{ Auth::user()->last_name }}</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column nav-legacy" data-widget="treeview" role="menu"
                data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a href="{{ route('admin.dashboard') }}"
                        class="{{ Request::routeIs('admin.dashboard') ? 'active ' : '' }} nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                        </p>
                    </a>
                </li>
                <!--Start Blood Bank Module-->
                <li
                    class="{{ Request::routeIs(['admin.blood.group.list', 'admin.blood.donar.add', 'admin.blood.group.add', 'admin.blood.group.edit', 'admin.blood.donar.add', 'admin.blood.donar.list']) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#"
                        class="{{ Request::routeIs(['admin.blood.group.list', 'admin.blood.donar.add', 'admin.blood.group.add', 'admin.blood.group.edit', 'admin.blood.donar.add','admin.blood.donar.list']) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-burn"></i>
                        <p>
                            Blood Bank
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs('admin.blood.group.list') ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Blood Groups</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.add') }}"
                                class="{{ Request::routeIs('admin.blood.group.add') ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Add Blood Group</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.donar.add') }}"
                                class="{{ Request::routeIs('admin.blood.donar.add') ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Add New Donor</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.donar.list') }}"
                                class="{{ Request::routeIs('admin.blood.donar.list') ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Donors List</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End blood bank Module-->
                <!--Hospital Module-->
                <li class="{{ Request::routeIs([]) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#" class="{{ Request::routeIs([]) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-hospital"></i>
                        <p>
                            Hospital
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Hospitals Types</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Add Hospital</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Hospitals </p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Hospital Module-->
                <!--Doctor Module-->
                <li class="{{ Request::routeIs([]) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#" class="{{ Request::routeIs([]) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-user-md"></i>
                        <p>
                            Doctors
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Doctors</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Add Doctor</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Doctor Module-->

                <!--Ambulance Module-->
                <li class="{{ Request::routeIs([]) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#" class="{{ Request::routeIs([]) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-ambulance"></i>
                        <p>
                            Ambulance
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Ambulance</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Add Ambulance</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Ambulance Types</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Ambulance Module-->
                <!--Fire Service Module-->
                <li class="{{ Request::routeIs([]) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#" class="{{ Request::routeIs([]) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-shower"></i>
                        <p>
                            Fire Stations
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p> Fire Stations</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Add Fire Stations</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Fire Service Module-->
                <!--Police Stations Module-->
                <li class="{{ Request::routeIs([]) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#" class="{{ Request::routeIs([]) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-motorcycle"></i>
                        <p>
                            Police Stations
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Police Stations</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Add Police Stations</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Police Stations Module-->
                <!--Blog Module-->
                <li class="{{ Request::routeIs([]) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#" class="{{ Request::routeIs([]) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fa fa-file"></i>
                        <p>
                            Blogs
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Authors</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Add Author</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Blogs</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Add Blogs</p>
                            </a>
                        </li>
                    </ul>
                    <!--End Blog Module-->
                    <!--Gallery Module-->
                <li class="{{ Request::routeIs([]) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#" class="{{ Request::routeIs([]) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-file"></i>
                        <p>
                            Galleries
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Videos</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Images</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Gallery Module-->
                <!--Users Module-->
                <li class="{{ Request::routeIs([]) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#" class="{{ Request::routeIs([]) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-users"></i>
                        <p>
                            Staffs
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Users</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Roles</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Users Module-->
                <!--Setting Module-->
                <li class="{{ Request::routeIs([]) ? 'menu-open' : '' }} nav-item has-treeview">
                    <a href="#" class="{{ Request::routeIs([]) ? 'active' : '' }} nav-link">
                        <i class="nav-icon fas fa-cog"></i>
                        <p>
                            Settings
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Menu Management</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Homepage Setting</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.blood.group.list') }}"
                                class="{{ Request::routeIs() ? 'active ' : '' }} nav-link">
                                <i class="fas fa-minus nav-icon"></i>
                                <p>Banner Management</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--End Setting Module-->


            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
