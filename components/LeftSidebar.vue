<template>
  <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
    <div class="main-navbar">
      <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
        <nuxt-link class="navbar-brand w-100 mr-0" :to="`/`" style="line-height: 25px;">
          <div class="d-table m-auto">
            <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="~/assets/images/shards-dashboards-logo-warning.svg" alt="Shards Dashboard">
            <span class="d-none d-md-inline ml-1">Shards Dashboard</span>
          </div>
        </nuxt-link>
        <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
          <i class="material-icons"></i>
        </a>
      </nav>
    </div>
    <form action="#" class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
      <div class="input-group input-group-seamless ml-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"></div>
    </form>
    <div class="nav-wrapper">
      <ul class="nav flex-column">
        <li class="nav-item">
          <nuxt-link class="nav-link active" :to="`/`">
            <i class="material-icons">edit</i>
            <span>Blog Dashboard</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link " :to="`blog-posts/`">
            <i class="material-icons">vertical_split</i>
            <span>Blog Posts</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="form-components.html">
            <i class="material-icons">view_module</i>
            <span>Forms &amp; Components</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="tables.html">
            <i class="material-icons">table_chart</i>
            <span>Tables</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="user-profile-lite.html">
            <i class="material-icons">person</i>
            <span>User Profile</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="errors.html">
            <i class="material-icons">error</i>
            <span>Errors</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
