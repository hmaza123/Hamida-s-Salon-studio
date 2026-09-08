(function () {
  document.documentElement.classList.add("js");

  var EMAIL = "hamidasalonstudio@gmail.com";
  var WA_NUMBER = "923452433381";
  var inServices = /\/services(\/|$)/.test(location.pathname.replace(/\/+$/, ""));
  var root = inServices ? "../" : "";
  var page = currentPage();

  function currentPage() {
    var path = location.pathname.replace(/\/+$/, "");
    var file = path.split("/").pop() || "index.html";
    if (path.indexOf("/services") !== -1) {
      if (!file || file === "services" || file === "index.html") return "services";
      return "services-" + file.replace(".html", "");
    }
    return file.replace(".html", "") || "index";
  }

  function waUrl(message) {
    var text = message || "Hello Hamida's Salon & Studio, I would like to book an appointment.";
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }

  function navLink(href, label, key, extraClass) {
    var active = page === key || (key === "services" && page.indexOf("services") === 0);
    return '<a class="' + (extraClass || "") + (active ? " is-active" : "") + '" href="' + root + href + '">' + label + "</a>";
  }

  var header = document.querySelector("[data-site-header]");
  if (header) {
    var dark = document.body.getAttribute("data-header") === "dark";
    header.innerHTML =
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<header class="site-header' + (dark ? " is-dark" : "") + '">' +
        '<div class="header-inner">' +
          '<a class="brand" href="' + root + 'index.html">' +
            '<img class="brand-logo brand-logo-on-light" src="' + root + 'assets/logo-header-on-light.png" width="298" height="96" alt="Hamida\'s Salon &amp; Studio" />' +
            '<img class="brand-logo brand-logo-on-dark" src="' + root + 'assets/logo-header.png" width="298" height="96" alt="" />' +
          "</a>" +
          '<nav class="nav-desktop" aria-label="Primary">' +
            navLink("index.html", "Home", "index") +
            navLink("about.html", "About", "about") +
            '<span class="has-sub">' +
              navLink("services/index.html", "Services", "services") +
              '<span class="sub">' +
                navLink("services/index.html", "All services", "services") +
                navLink("services/hair.html", "Hair", "services-hair") +
                navLink("services/makeup.html", "Makeup", "services-makeup") +
                navLink("services/nails.html", "Nails", "services-nails") +
                navLink("services/skin.html", "Skin & Body", "services-skin") +
              "</span>" +
            "</span>" +
            navLink("bridal.html", "Bridal", "bridal") +
            navLink("gallery.html", "Gallery", "gallery") +
            navLink("packages.html", "Packages", "packages") +
            navLink("contact.html", "Contact", "contact") +
            navLink("book.html", "Book", "book", "nav-cta") +
          "</nav>" +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>' +
        "</div>" +
        '<nav class="nav-mobile" id="mobile-nav" aria-label="Mobile">' +
          navLink("index.html", "Home", "index") +
          navLink("about.html", "About", "about") +
          navLink("services/index.html", "Services", "services") +
          navLink("bridal.html", "Bridal", "bridal") +
          navLink("gallery.html", "Gallery", "gallery") +
          navLink("packages.html", "Packages", "packages") +
          navLink("book.html", "Book", "book") +
          navLink("contact.html", "Contact", "contact") +
          navLink("location.html", "Location", "location") +
        "</nav>" +
      "</header>";
  }

  var footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML =
      '<footer class="site-footer">' +
        '<div class="container footer-grid">' +
          "<div>" +
            '<a class="footer-brand" href="' + root + 'index.html">' +
              '<img class="footer-logo" src="' + root + 'assets/logo-header.png" width="298" height="96" alt="Hamida\'s Salon &amp; Studio" />' +
            "</a>" +
            "<p>Full-service beauty in Clifton Block 8 — hair, bridal makeup, nails, skin and finishing.</p>" +
          "</div>" +
          "<div><h3>Visit</h3><ul>" +
            "<li>House F67/A, Clifton Block 8</li>" +
            "<li>Opposite Bacha Party, Karachi</li>" +
            '<li><a href="' + root + 'location.html">Maps &amp; directions</a></li>' +
          "</ul></div>" +
          "<div><h3>Contact</h3><ul>" +
            '<li><a href="tel:+923452433381">0345 2433381</a></li>' +
            '<li><a href="mailto:' + EMAIL + '">' + EMAIL + "</a></li>" +
            '<li><a href="' + waUrl() + '" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>' +
          "</ul></div>" +
          "<div><h3>Explore</h3><ul>" +
            '<li><a href="' + root + 'book.html">Book</a></li>' +
            '<li><a href="' + root + 'bridal.html">Bridal</a></li>' +
            '<li><a href="' + root + 'faq.html">FAQ</a></li>' +
            '<li><a href="' + root + 'privacy.html">Privacy</a></li>' +
            '<li><a href="https://www.instagram.com/hamidas_salon_studio/" target="_blank" rel="noopener noreferrer">Instagram</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="container footer-copy">&copy; ' + new Date().getFullYear() + " Hamida's Salon &amp; Studio. Clifton, Karachi.</div>" +
      "</footer>" +
      '<a class="wa-float" href="' + waUrl() + '" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.5L4 20l1.1-4A8.5 8.5 0 1 1 20.5 11.5Zm-8.5 7a7 7 0 1 0-6.1-3.5l-.4.7-.7 2.5 2.6-.7.6-.3A7 7 0 0 0 12 18.5Zm4-5.3c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1-.5.7-.7.8-.3.2-.5.1a5.7 5.7 0 0 1-1.7-1 6.3 6.3 0 0 1-1.2-1.5c-.1-.2 0-.4.1-.5l.3-.4.1-.3a.4.4 0 0 0 0-.4c0-.1-.5-1.2-.7-1.6s-.4-.3-.5-.3h-.4a.8.8 0 0 0-.6.3 2.5 2.5 0 0 0-.8 1.9 4.3 4.3 0 0 0 .9 2.3 9.8 9.8 0 0 0 3.8 3.4 12.8 12.8 0 0 0 1.3.5 3.1 3.1 0 0 0 1.4.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.2-.1-.4-.2Z"/></svg>' +
      "</a>";
  }

  var toggle = document.querySelector(".nav-toggle");
  var mobile = document.querySelector(".nav-mobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = mobile.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  var siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    var onScroll = function () {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  document.querySelectorAll("[data-email]").forEach(function (el) {
    if (!el.getAttribute("href")) el.setAttribute("href", "mailto:" + EMAIL);
    if (!el.textContent.trim()) el.textContent = EMAIL;
  });

  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    var custom = el.getAttribute("data-wa-msg");
    el.setAttribute("href", waUrl(custom));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  function formMessage(form) {
    var data = new FormData(form);
    var lines = ["Hello Hamida's Salon & Studio,"];
    var service = data.get("service");
    lines.push(service ? "I would like to enquire about " + service + "." : "I would like to get in touch.");
    ["name", "phone", "email", "date", "message", "notes"].forEach(function (key) {
      var value = data.get(key);
      if (value) lines.push(key.charAt(0).toUpperCase() + key.slice(1) + ": " + value);
    });
    return lines.join("\n");
  }

  document.querySelectorAll("[data-wa-from-form]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var form = btn.closest("form");
      if (!form) return;
      if (!form.reportValidity()) return;
      window.open(waUrl(formMessage(form)), "_blank", "noopener");
    });
  });

  if (new URLSearchParams(location.search).get("success") === "true") {
    var panel = document.getElementById("form-success");
    if (panel) panel.classList.add("is-success");
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
