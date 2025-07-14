document.write(`<header class="mb-5">
      <div class="container">
        <nav class="navbar navbar-expand-xl bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="Assets/Micro Logo.png" alt="Logo" />
            </a>

            <div
              class="d-flex d-lg-none align-items-center justify-content-between gap-2 w-25"
            >
              <li class="nav-item dropdown list-unstyled d-xl-none">
                <a
                  class="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i
                    class="fas fa-globe me-1"
                    style="color: black; font-size: 1rem"
                  ></i>
                  EN
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i
                        class="fas fa-globe me-1"
                        style="color: black; font-size: 1rem"
                      ></i>
                      HI</a
                    >
                  </li>
                </ul>
              </li>

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <!-- Navbar content -->
            <div
              class="collapse navbar-collapse justify-content-between"
              id="navbarContent"
            >
              <!-- Left menu -->
              <ul class="navbar-nav gap-lg-4 align-items-lg-center">
                <li
                  class="nav-item dropdown"
                  onclick="changeHtmlFile('Products')"
                >
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="ProductDropdown"
                  >
                    Product
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item Products"
                        href="onlineWhiteBoard.html"
                        >Online whiteboard</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item Products" href="index.html"
                        >Product</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item Products"
                        href="IntegrationsAndApps.html"
                        >Apps & Integrations</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item Products"
                        href="templatedOfMiro.html"
                      >
                        Templates</a
                      >
                    </li>
                  </ul>
                </li>
                <li
                  class="nav-item dropdown"
                  onclick="changeHtmlFile('Solutions')"
                >
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="solutionsDropdown"
                  >
                    Solutions
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item Solutions"
                        href="MeetingsandWorkshops.html"
                        >Meetings and Workshops</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item Solutions" href="index.html"
                        >Solutions</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item Solutions"
                        href="Brainstorming.html"
                        >Brainstorming & Ideation</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item Solutions"
                        href="AgileAndWorkflows.html"
                        >Agile Workflows</a
                      >
                    </li>
                  </ul>
                </li>
                <li
                  class="nav-item dropdown"
                  onclick="changeHtmlFile('Resources')"
                >
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="ResourcesDropdown"
                  >
                    Resources
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item Resources" href="MiroAcademy.html"
                        >Miro Academy</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item Resources" href="HelpCenter.html"
                        >Help Center</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item Resources" href="Blog.html"
                        >Blog</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item Resources" href="index.html"
                        >Resources</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Enterprise</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
              </ul>

              <!-- Right menu -->
              <ul
                class="navbar-nav gap-lg-4 align-items-lg-center mt-3 mt-lg-0"
              >
                <li
                  class="nav-item dropdown list-unstyled d-xl-inline-block d-none"
                >
                  <a
                    class="nav-link dropdown-toggle d-flex align-items-center"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i
                      class="fas fa-globe me-1"
                      style="color: black; font-size: 1rem"
                    ></i>
                    EN
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i
                          class="fas fa-globe me-1"
                          style="color: black; font-size: 1rem"
                        ></i>
                        HI</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact Sales</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                  <a
                    class="icon-link icon-link-hover text-decoration-none btn bg-primary text-white py-2 px-4 rounded-5"
                    href="#"
                  >
                    Sign up free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="bi"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <hr class="mt-0" />
      </div>
    </header>`);
