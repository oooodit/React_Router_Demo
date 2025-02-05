import { Link, Outlet } from "react-router-dom";
import React from "react";
export default function Navbar() {
  return (
    <>
      <footer class="bg-body-tertiary text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-body">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-body">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-body">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-body">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-body">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Outlet />

        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}
        >
          © 2020 Copyright:
          <a class="text-body" href="https://mdbootstrap.com/">
            DarshanUniversity.com
          </a>
        </div>
      </footer>
    </>
  );
}
