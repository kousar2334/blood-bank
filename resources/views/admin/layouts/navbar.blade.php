<div id="sidebar"><a href="#" class="visible-phone"><i class="icon icon-home"></i> Dashboard</a>
    <ul>
        <li class="{{ Request::routeIs('admin.dashboard') ? 'active' : '' }}"><a
                href="{{ route('admin.dashboard') }}"><i class="fas fa-tachometer-alt"></i> <span>Dashboard</span></a>
        </li>
        <li
            class="submenu {{ Request::routeIs(['admin.blood.group.list', 'admin.blood.donar.add']) ? 'active open' : '' }}">
            <a href="#"><i class="fas fa-burn"></i> <span>Blood Bank</span> <span class="expand-nav-item">+</span></a>
            <ul>
                <li class="{{ Request::routeIs('admin.blood.group.list') ? 'active ' : '' }}"><a
                        href="{{ route('admin.blood.group.list') }}"><i class="fal fa-minus"></i> Blood Groups</a></li>
                <li class="{{ Request::routeIs('admin.blood.donar.add') ? 'active ' : '' }}"><a
                        href="{{ route('admin.blood.donar.add') }}"><i class="fal fa-minus"></i> Add New Donar</a></li>
                <li><a href="form-validation.html"><i class="fal fa-minus"></i> Donar List</a></li>
                <li><a href="form-wizard.html"><i class="fal fa-minus"></i> Pending Donars</a></li>
            </ul>
        </li>

        <li class="submenu"> <a href="#"><i class="fas fa-user-md"></i> <span class="nav_title">Doctors</span> <span
                    class="expand-nav-item">+</span></a>
            <ul>
                <li><a href="index2.html"><i class="fal fa-minus"></i> Doctors Specialist</a></li>
                <li><a href="gallery.html"><i class="fal fa-minus"></i> Add Doctor</a></li>
                <li><a href="calendar.html"><i class="fal fa-minus"></i> Doctor's List</a></li>
                <li><a href="invoice.html"><i class="fal fa-minus"></i> Pending Doctors</a></li>
            </ul>
        </li>
        <li class="submenu"> <a href="#"><i class="fas fa-hospital"></i> <span>Hospital</span> <span
                    class="expand-nav-item">+</span></a>
            <ul>
                <li><a href="gallery.html">Add Hospital</a></li>
                <li><a href="calendar.html">Hospital's List</a></li>
                <li><a href="invoice.html">Pending Hospital</a></li>
                <li><a href="invoice.html">Govt. Hospital</a></li>
                <li><a href="invoice.html">Private Hospital</a></li>
                <li><a href="invoice.html">Private Clinic</a></li>
            </ul>
        </li>
        <li class="submenu"> <a href="#"><i class="fas fa-ambulance"></i> <span>Ambulense</span> <span
                    class="expand-nav-item">+</span></a>
            <ul>
                <li><a href="gallery.html">Add Ambulense</a></li>
                <li><a href="calendar.html">Ambulense's List</a></li>
                <li><a href="invoice.html">Pending Ambulense</a></li>
                <li><a href="invoice.html">Govt. Ambulense</a></li>
                <li><a href="invoice.html">Private Ambulense</a></li>
            </ul>
        </li>
        <li class="submenu"> <a href="#"><i class="fas fa-fire-extinguisher"></i> <span>Fire Service</span> <span
                    class="expand-nav-item">+</span></a>
            <ul>
                <li><a href="error403.html">Add Fire Station</a></li>
                <li><a href="error404.html">Station's List</a></li>
            </ul>
        </li>
        <li class="submenu"> <a href="#"><i class="fa fa-motorcycle"></i> <span>Police Station</span> <span
                    class="expand-nav-item">+</span></a>
            <ul>
                <li><a href="error403.html">Add Police Station</a></li>
                <li><a href="error404.html">Station's List</a></li>
            </ul>
        </li>
        <li class="submenu"> <a href="#"><i class="fas fa-map-marked-alt"></i> <span>Turist Spots</span> <span
                    class="expand-nav-item">+</span></a>
            <ul>
                <li><a href="error403.html">Add Turist Place</a></li>
                <li><a href="error404.html">Turist Place's List</a></li>
                <li><a href="error404.html">Write a Blog</a></li>
                <li><a href="error404.html">Blogs</a></li>
            </ul>
        </li>
        <li class="submenu"> <a href="#"><i class="fas fa-users"></i> <span>Users</span> <span
                    class="expand-nav-item">+</span></a>
            <ul>
                <li><a href="error403.html"> Add user</a></li>
                <li><a href="error404.html"> User's List</a></li>
                <li><a href="error404.html">Manage User's Roles</a></li>


            </ul>
        </li>
        <li><a href="index.html"><i class="fas fa-cogs"></i> <span>Setting</span></a> </li>
        <li><a href="{{ route('admin.logout') }}"><i class="fas fa-cogs"></i> <span>Logout</span></a> </li>
    </ul>
</div>
